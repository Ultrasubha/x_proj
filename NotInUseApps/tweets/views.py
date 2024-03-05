from django.shortcuts import redirect
from homeApp.models import Post


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
