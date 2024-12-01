from django.urls import path
from core.views import index

urlpatterns = [
    path(route='', view=index, name='index')
]
