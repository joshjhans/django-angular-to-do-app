from django_filters.rest_framework import DjangoFilterBackend  # type: ignore
from drf_spectacular.utils import extend_schema
from rest_framework import permissions, viewsets  # type: ignore
from rest_framework.filters import SearchFilter  # type: ignore

from .models import ToDo
from .serializers import ToDoSerializer


@extend_schema(tags=["To Do ✅"])
class ToDoViewSet(viewsets.ModelViewSet):
    queryset = ToDo.objects.all().order_by(
        "-to_do_id",
    )
    serializer_class = ToDoSerializer
    permission_classes = [permissions.AllowAny]
    filter_backends = [
        DjangoFilterBackend,
        SearchFilter,
    ]
    search_fields = [
        "name",
        "description",
    ]
    filterset_fields = [
        "to_do_id",
        "name",
        "description",
        "due_datetime",
        "owner",
    ]
