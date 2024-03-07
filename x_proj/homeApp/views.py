from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.core.files.storage import FileSystemStorage
from .models import Post
from collections import Counter


# @login_required
def home_view(request):
    user = request.user
    posts = Post.objects.values('id', 'author__username', 'content', 'media', 'created_at', 'likes_count').order_by('-created_at')
    phrases = get_top_phrases_with_priority()
    liked_post_ids = user.liked_posts.values_list('id', flat=True) if user.is_authenticated else []
    return render(request, "homeApp/base.html", {'user': user, 'posts': posts, 'liked_post_ids': liked_post_ids, 'phrases': phrases})


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

# @login_required
def like_post(request, post_id):
    logged_user = request.user
    post = Post.objects.get(id=post_id)

    if logged_user in post.liked_by.all():

        post.likes_count -= 1
        post.liked_by.remove(logged_user)
    else:

        post.likes_count += 1
        post.liked_by.add(logged_user)

    post.save()
    return redirect("/home")
    # return HttpResponse('hisdfok')


def get_top_phrases_with_priority(top_count=4):
    sentences = [post.content for post in Post.objects.all()]
    
    word_counts = Counter()
    exclude_words = ["this", "that", "the", "is", "a", "with", "and", "should", "be", "has", "no", "i", "am"]
    exclude_words += [words.capitalize() for words in exclude_words]
    exclude_words += ["!!!"]
    
    for sentence in sentences:
        words = sentence.split()
        for word in words:
            if word not in exclude_words:
                if word[0] == "#":
                    word = word[1:]
                    word_counts[word] += 2  # Give extra priority
                else:
                    word_counts[word] += 1
    return dict(word_counts.most_common(top_count))
