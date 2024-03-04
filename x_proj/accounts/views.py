# accounts/views.py
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.models import User
# from django.contrib.auth.forms import UserCreationForm
# from django.http import HttpResponse


def login_view(request):
    user = authenticate(
        username=request.POST["name"], password=request.POST["password"]
    )
    if user is not None:
        login(request, user)
        return redirect("/home")
    else:
        #messages.error(request, "Incorrect Login Name or password")
        return render(request, "accounts/accounts.html")


def accounts_view(request):
    return render(request, "accounts/accounts.html")


def signup_view(request):
    # print(request.POST)
    user = User.objects.create_user(
        request.POST["name"], request.POST["email"], request.POST["password"]
    )
    user.save()
    login(request, user)
    return redirect("/home")


def logout_view(request):
    logout(request)
    #messages.success(request, "Logout successful.")
    return redirect("accounts/accounts.html")
