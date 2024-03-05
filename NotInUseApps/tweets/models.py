from django.db import models
from django.contrib.auth.models import User
from homeApp.models import Post

class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="post_comments")
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
