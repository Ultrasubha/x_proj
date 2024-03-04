from django.db import models
from django.contrib.auth.models import User


# class UserProfile(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
#     name = models.CharField(max_length=255, blank=True)
#     bio = models.TextField(blank=True)
#     profile_image = models.ImageField(
#         upload_to="profile_images/", blank=True, null=True
#     )
#     followers = models.ManyToManyField(User, related_name="following", blank=True)
#     following = models.ManyToManyField(
#         User, related_name="followers", symmetrical=False, blank=True
#     )
