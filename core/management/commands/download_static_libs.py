import os
from django.core.management.base import BaseCommand
import requests


class Command(BaseCommand):
    help = ""

    def handle(self, *args, **options):
        vue_response = requests.get(
            "https://unpkg.com/vue@3/dist/vue.esm-browser.js", timeout=10)
        vue_content = vue_response.content.decode("UTF-8")

        tw_response = requests.get(
            "https://cdn.tailwindcss.com", timeout=10)
        tw_content = tw_response.content.decode("UTF-8")

        libs_dir = os.path.join("static", "libs")

        if not os.path.isdir(libs_dir):
            os.makedirs(libs_dir)

        vue_file = os.path.join(libs_dir, "vue.esm-browser.js")
        tw_file = os.path.join(libs_dir, "tailwind.js")

        with open(vue_file, "w", encoding="UTF-8") as f:
            f.write(vue_content)
            f.close()

        with open(tw_file, "w", encoding="UTF-8") as f:
            f.write(tw_content)
            f.close()
