from django.db import models

class AdminData(models.Model):
  username = models.CharField(max_length=255)
  password = models.CharField(max_length=255)
