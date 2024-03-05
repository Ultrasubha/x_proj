# accounts/urls.py
from django.urls import path
from .views import like_post

app_name = 'tweets'

urlpatterns = [
    path('like_post/<int:post_id>/', like_post, name='like_post'),
]
