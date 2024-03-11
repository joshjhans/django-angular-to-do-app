from common.serializers import UserSerializer
from django.contrib.auth.models import User
from django_filters.rest_framework import DjangoFilterBackend  # type: ignore
from drf_spectacular.utils import extend_schema
from rest_framework import permissions, viewsets  # type: ignore
from rest_framework.filters import SearchFilter  # type: ignore


@extend_schema(tags=["Users 👋"])
class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """

    queryset = User.objects.all().order_by(
        "-date_joined",
    )
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]
    filter_backends = [
        DjangoFilterBackend,
        SearchFilter,
    ]
    search_fields = [
        "username",
        "first_name",
        "last_name",
        "email",
    ]
    filterset_fields = [
        "username",
        "first_name",
        "last_name",
        "email",
    ]
