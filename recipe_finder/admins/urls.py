from django.urls import path
from . import views

urlpatterns = [
    path('admins/', views.admins_view, name='admins'),
    #path('add_recipe/', views.admin_add_recipe_view, name='admin_add_recipe'),
    # Add other URLs as needed
]
