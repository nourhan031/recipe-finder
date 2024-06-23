from django.urls import path
from . import views

urlpatterns = [
    path('add/', views.add_recipe, name='add_recipe'),
    path('edit/<int:recipe_id>/', views.edit_recipe, name='edit_recipe'),
    # path('delete/<int:recipe_id>/', views.delete_recipe, name='delete_recipe'),  # Uncomment if implementing delete functionality
    path('categories/', views.category_recipes, name='categories'),
    path('categories/<str:category>/', views.category_recipes, name='category_recipes'),
    path('dessert/', views.category_recipes, {'category': 'dessert'}, name='dessert'),
    path('lunch/', views.category_recipes, {'category': 'lunch'}, name='lunch'),
    path('quick_easy/', views.category_recipes, {'category': 'quick_easy'}, name='quick_easy'),
    path('list/', views.recipes_list, name='recipes_list'),
    path('search/', views.recipe_search, name='recipe_search'),
    #path('favorites/', views.recipe_favorites, name='recipe_favorites'),
    path('<int:recipe_id>/', views.recipe_detail, name='recipe'),
]
