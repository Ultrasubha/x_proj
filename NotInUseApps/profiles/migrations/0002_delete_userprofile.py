# Generated by Django 5.0.2 on 2024-03-02 16:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("profiles", "0001_initial"),
    ]

    operations = [
        migrations.DeleteModel(
            name="UserProfile",
        ),
    ]