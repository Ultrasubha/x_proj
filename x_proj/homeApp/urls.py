from django.urls import path
from .views import home_view, create_page, like_post, retweet_post

app_name = "homeApp"

urlpatterns = [
    path("", home_view, name="home"),
    path("createPost", create_page, name="create_page"),
    path('like_post/<int:post_id>/', like_post, name='like_post'),
    path('retweet_post/<int:post_id>/', retweet_post, name='retweet_post'),
]
