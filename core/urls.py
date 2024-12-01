from django.urls import path
from core.views import index, user_packages

urlpatterns = [
    path(route='', view=index, name='index'),
    path(route='user_packages/<int:uid>',
         view=user_packages, name='user_packages')
]
