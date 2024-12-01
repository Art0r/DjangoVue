from django.shortcuts import render
from django.http import HttpRequest


class User:
    uid: int
    name: str
    email: str

    def __init__(self, uid: int, name: str, email: str):
        self.uid = uid
        self.name = name
        self.email = email


def index(request: HttpRequest):

    users = [
        User(1, "Joao", "joao@gmail.com"),
        User(2, "Maria", "maria@gmail.com"),
        User(3, "Jose", "jose@gmail.com")
    ]

    context = {
        "users": users
    }

    return render(template_name="index.html", request=request, context=context)
