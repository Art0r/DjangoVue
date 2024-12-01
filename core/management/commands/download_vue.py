import os
from django.core.management.base import BaseCommand
import requests


class Command(BaseCommand):
    help = ""

    def handle(self, *args, **options):
        response = requests.get(
            "https://unpkg.com/vue@3/dist/vue.esm-browser.js", timeout=10)
        content = response.content.decode("UTF-8")

        vue_dir = os.path.join("static", "vue")
        vue_file = os.path.join(vue_dir, "vue.esm-browser.js")

        if not os.path.isdir(vue_dir):
            os.makedirs(vue_dir)

        with open(vue_file, "w", encoding="UTF-8") as f:
            f.write(content)
            f.close()
