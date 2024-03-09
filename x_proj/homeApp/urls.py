from django.urls import path
from .views import home_view, create_page,openUp, create_comment, like_post, retweet_post

app_name = "homeApp"

urlpatterns = [
    path("", home_view, name="home"),
    path("createPost", create_page, name="create_page"),
    path("openUp/<int:post_id>/", openUp, name="openUp"),
    path("create_comment/<int:post_id>/", create_comment, name="create_comment"),
    path('like_post/<int:post_id>/', like_post, name='like_post'),
    path('retweet_post/<int:post_id>/', retweet_post, name='retweet_post'),
]
