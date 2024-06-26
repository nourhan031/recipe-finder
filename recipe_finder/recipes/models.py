from django.db import models
from django.contrib.auth.models import User

class Recipe(models.Model):
    recipe_name = models.CharField(max_length=255)
    course_name = models.CharField(max_length=100)
    ingredients = models.TextField()
    description = models.TextField()
    like = models.ManyToManyField(User , blank=True)

    image = models.ImageField(upload_to='recipes/images/')
    
    
    def __str__(self):
        return self.recipe_name


class Category(models.Model):
    category_name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='recipes/categoryImages/')
    
    
    def __str__(self):
        return self.category_name

