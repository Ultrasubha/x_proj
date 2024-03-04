from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.core.files.storage import FileSystemStorage
from .models import Post


# @login_required
def home_view(request):
    user = request.user
    posts = Post.objects.values('author__username', 'content', 'media', 'created_at').order_by('-created_at')
    return render(request, "homeApp/home.html", {'user': user, 'posts': posts})


def create_page(request):
    if request.method == 'POST':
        current_user = User.objects.filter(username=request.user).first()
        mesg = request.POST.get('mesg', '')
        myfile = request.FILES.get('media')
        if myfile:
            fs = FileSystemStorage()
            filename = fs.save(myfile.name, myfile)
        else:
            filename = None
        newPost = Post(author=current_user, content=mesg, media=filename)
        newPost.save()
        return redirect("/home")

    # can use to handle errors
    # return render(request, 'your_template.html')
