from django import template
from django.utils.timesince import timesince
from django.utils import timezone
from PIL import Image

register = template.Library()


@register.filter
def custom_timesince(value):
    now = timezone.now()
    diff = now - value
    minutes = diff.total_seconds() / 60

    if minutes < 1:
        return '{}s'.format(int(diff.total_seconds()))
    elif minutes < 60:
        return '{}m'.format(int(minutes))
    else:
        return '{}h'.format(int(minutes / 60))


image_extensions = ["jpg", "jpeg", "png"]
video_extensions = ['mp4', 'avi', 'mkv', 'mov', 'flv', 'wmv', 'webm']


@register.filter
def is_image(filename):
    return filename.split(".")[-1] in image_extensions


@register.filter
def is_video(filename):
    return filename.split(".")[-1] in video_extensions
