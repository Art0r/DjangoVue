import json
from django import template

register = template.Library()


@register.filter
def object_to_json(value: object):
    return json.dumps(value.__dict__)
