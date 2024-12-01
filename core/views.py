from django.shortcuts import render
from django.http import HttpRequest


def index(request: HttpRequest):

    context = {
        "message": "Ola Mundo"
    }

    return render(template_name="index.html", request=request, context=context)
