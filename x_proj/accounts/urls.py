# accounts/urls.py
from django.urls import path
from .views import accounts_view, logout_view, signup_view, login_view

app_name = "accounts"

urlpatterns = [
    path("", accounts_view, name="accounts"),
    path("login-url", login_view, name="login-url"),
    path("logout/", logout_view, name="logout"),
    path("signup-url", signup_view, name="signup-url"),
]