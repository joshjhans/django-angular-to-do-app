FROM python:3.11 as base

ARG USERNAME=python
ARG USER_UID=1000
ARG USER_GID=$USER_UID

ENV PYTHONUNBUFFERED 1
ENV DEBIAN_FRONTEND=noninteractive
ENV JUPYTER_PLATFORM_DIRS=1

RUN apt-get update \
    && apt-get install -y \
    nano \
    openjdk-17-jdk-headless \
    && cd /usr/local/bin \
    && pip3 --no-cache-dir install --upgrade pip \
    && rm -rf /var/lib/apt/lists/*

RUN groupadd --gid $USER_GID $USERNAME \
    && useradd --uid $USER_UID --gid $USER_GID -m $USERNAME \
    && apt-get update \
    && apt-get install -y sudo \
    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

RUN NODE_VERSION="$(curl -fsSL https://nodejs.org/dist/latest/SHASUMS256.txt | head -n1 | awk '{ print $2}' | awk -F - '{ print $2}')" \
    ARCH= && dpkgArch="$(dpkg --print-architecture)" \
    && case "${dpkgArch##*-}" in \
    amd64) ARCH='x64';; \
    arm64) ARCH='arm64';; \
    *) echo "unsupported architecture"; exit 1 ;; \
    esac \
    && for key in $(curl -sL https://raw.githubusercontent.com/nodejs/docker-node/HEAD/keys/node.keys); do \
    gpg --batch --keyserver hkps://keys.openpgp.org --recv-keys "$key" || \
    gpg --batch --keyserver keyserver.ubuntu.com --recv-keys "$key" ; \
    done \
    && curl -fsSLO --compressed "https://nodejs.org/dist/$NODE_VERSION/node-$NODE_VERSION-linux-$ARCH.tar.xz" \
    && curl -fsSLO --compressed "https://nodejs.org/dist/$NODE_VERSION/SHASUMS256.txt.asc" \
    && gpg --batch --decrypt --output SHASUMS256.txt SHASUMS256.txt.asc \
    && grep " node-$NODE_VERSION-linux-$ARCH.tar.xz\$" SHASUMS256.txt | sha256sum -c - \
    && tar -xJf "node-$NODE_VERSION-linux-$ARCH.tar.xz" -C /usr/local --strip-components=1 --no-same-owner \
    && rm "node-$NODE_VERSION-linux-$ARCH.tar.xz" SHASUMS256.txt.asc SHASUMS256.txt \
    && ln -s /usr/local/bin/node /usr/local/bin/nodejs

EXPOSE 8080

WORKDIR /src

RUN SNIPPET="export PROMPT_COMMAND='history -a' && export HISTFILE=/commandhistory/.bash_history" \
    && mkdir /commandhistory \
    && touch /commandhistory/.bash_history \
    && chown -R $USERNAME /commandhistory \
    && echo "$SNIPPET" >> "/home/$USERNAME/.bashrc"

RUN pip install --upgrade pip
RUN npm install -g @angular/cli@latest

RUN mkdir -p /django-angular-to-do-app/src/api
RUN mkdir -p /django-angular-to-do-app/src/ui
USER ${USERNAME}

FROM base as devl

WORKDIR /django-angular-to-do-app/src/api
COPY ./src/api/requirements.txt /django-angular-to-do-app/src/api/
RUN python -m pip install -r requirements.txt
ENV PYTHONPATH /django-angular-to-do-app

WORKDIR /django-angular-to-do-app/src/ui
COPY ./src/ui/package.json ./src/ui/package-lock.json /django-angular-to-do-app/src/ui/
# RUN npm i

WORKDIR /django-angular-to-do-app/src

CMD [ "tail", "-f", "/dev/null" ]
