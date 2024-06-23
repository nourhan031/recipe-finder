from django.db import models

class Recipe(models.Model):
    recipe_name = models.CharField(max_length=255)
    course_name = models.CharField(max_length=100)
    ingredients = models.TextField()
    description = models.TextField()

    def __str__(self):
        return self.recipe_name
