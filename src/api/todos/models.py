from django.contrib.auth import get_user_model
from django.contrib.auth.models import AbstractBaseUser
from django.db import models


class ToDo(
    models.Model,
):
    to_do_id = models.AutoField(
        primary_key=True,
    )

    name = models.CharField(
        max_length=255,
        null=False,
        blank=False,
    )

    description = models.TextField(
        null=True,
        blank=True,
    )

    due_datetime = models.DateTimeField(
        null=True,
        blank=False,
    )

    is_complete = models.BooleanField(
        null=False,
        blank=False,
        default=False,
    )

    owner: models.ForeignKey[AbstractBaseUser | None] = models.ForeignKey(
        get_user_model(),
        null=True,
        blank=True,
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return "To Do #{to_do_id}: {name}".format(
            to_do_id=self.to_do_id,
            name=self.name,
        )
