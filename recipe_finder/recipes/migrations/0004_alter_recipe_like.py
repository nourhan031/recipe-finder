# Generated by Django 5.0.6 on 2024-06-24 06:57

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0003_recipe_like'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipe',
            name='like',
            field=models.ManyToManyField(to=settings.AUTH_USER_MODEL),
        ),
    ]
