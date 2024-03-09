from django.db import models
from django.contrib.auth.models import User


class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(
        "Post", on_delete=models.CASCADE, related_name="post_comments"
    )
    content = models.TextField()
    media = models.URLField(null=True, blank=True, default=None)
    created_at = models.DateTimeField(auto_now_add=True)


class Post(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField(max_length=500)
    media = models.URLField(null=True, blank=True, default=None)
    created_at = models.DateTimeField(auto_now_add=True)
    likes_count = models.PositiveIntegerField(default=0)
    liked_by = models.ManyToManyField(User, related_name="liked_posts", blank=True)
    retweet_count = models.PositiveIntegerField(default=0)
    retweet_by = models.ManyToManyField(User, related_name="retweet_posts", blank=True)
    comments = models.ManyToManyField(Comment, related_name="comment_posts", blank=True)

    def __str__(self):
        return f"{self.author.username}'s Post - {self.created_at}"


class UserProfile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    profile_pic = models.URLField(blank=True, null=True)
    profile_cover = models.URLField(blank=True, null=True)
    user_description = models.TextField(blank=True)
    followers = models.ManyToManyField(User, related_name="following", blank=True)
    following = models.ManyToManyField(
        User, related_name="followers", symmetrical=False, blank=True
    )


class Retweet(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(
        "Post", on_delete=models.CASCADE, related_name="post_retweets", blank=True, null=True
    )
    created_at = models.DateTimeField(auto_now_add=True)
