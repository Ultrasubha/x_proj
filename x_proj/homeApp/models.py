from django.db import models
from django.contrib.auth.models import User


class Post(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField(max_length=500)
    media = models.URLField(null=True, blank=True, default=None)
    created_at = models.DateTimeField(auto_now_add=True)
    # post_id = models.CharField()
    
    def __str__(self):
        return f"{self.author.username}'s Post - {self.created_at}"
    # image = models.ImageField(upload_to="post_images/", blank=True, null=True)
    # video = models.FileField(upload_to="post_videos/", null=True, blank=True)
    # likes_count = models.PositiveIntegerField(default=0)
    # liked_by = models.ManyToManyField(User, related_name="liked_posts", blank=True)
    # comments = models.ManyToManyField(Comment, related_name="comment_posts", blank=True)


# class Comment(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     post = models.ForeignKey(
#         "Post", on_delete=models.CASCADE, related_name="post_comments"
#     )
#     content = models.TextField()
#     created_at = models.DateTimeField(auto_now_add=True)
