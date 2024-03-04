from django.urls import path
from .views import home_view, create_page

app_name = "homeApp"

urlpatterns = [
    path("", home_view, name="home"),
    path("createPost", create_page, name="create_page"),
]
