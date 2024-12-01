from django.shortcuts import render
from django.http import HttpRequest, JsonResponse, HttpResponse


class User:
    uid: int
    name: str
    email: str

    def __init__(self, uid: int, name: str, email: str):
        self.uid = uid
        self.name = name
        self.email = email


def index(request: HttpRequest) -> HttpResponse:

    users = [
        User(1, "Joao", "joao@gmail.com"),
        User(2, "Maria", "maria@gmail.com"),
        User(3, "Jose", "jose@gmail.com")
    ]

    context = {
        "users": users
    }

    return render(template_name="index.html", request=request, context=context)


def user_packages(request: HttpRequest, uid: int) -> JsonResponse:

    data = (
        {
            "uid": 1,
            "packages": [
                {
                    "name": "package 1",
                    "content": "Smartphone"
                },
                {
                    "name": "package 2",
                    "content": "PC"
                },
                {
                    "name": "package 3",
                    "content": "PS5"
                }
            ]
        },
        {
            "uid": 2,
            "packages": [
                {
                    "name": "package 4",
                    "content": "Smartphone"
                },
                {
                    "name": "package 5",
                    "content": "Switch"
                },
                {
                    "name": "package 6",
                    "content": "PS4"
                }
            ]
        },
        {
            "uid": 3,
            "packages": [
                {
                    "name": "package 7",
                    "content": "Smartphone"
                },
                {
                    "name": "package 8",
                    "content": "Nintendo Wii"
                },
                {
                    "name": "package 9",
                    "content": "XBOX"
                }
            ]
        },
    )

    user = list(filter(lambda user: user['uid'] == uid, data))[0]

    return JsonResponse(data=user)
