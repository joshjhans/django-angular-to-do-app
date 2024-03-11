from rest_framework import serializers  # type: ignore

from .models import ToDo


class ToDoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ToDo
        fields = [
            "to_do_id",
            "name",
            "description",
            "due_datetime",
            "is_complete",
            "owner",
        ]
