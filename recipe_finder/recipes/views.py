from django.shortcuts import render, redirect, get_object_or_404
from .models import Recipe
from .models import Category
from .forms import RecipeForm
from django.urls import reverse
from django.middleware.csrf import get_token

def add_recipe(request):
    if request.method == 'POST':
        form = RecipeForm(request.POST)
        if form.is_valid():
            Recipe.objects.create(
                name=form.cleaned_data['recipeName'],
                course=form.cleaned_data['courseName'],
                ingredients=form.cleaned_data['ingredients'],
                description=form.cleaned_data['description']
            )
            return redirect('recipes_list')
    else:
        form = RecipeForm()
    return render(request, 'admin_add_recipe.html', {'form': form})

def edit_recipe(request, recipe_id):
    recipe = get_object_or_404(Recipe, id=recipe_id)
    if request.method == 'POST':
        form = RecipeForm(request.POST, instance=recipe)
        if form.is_valid():
            recipe.recipe_name = form.cleaned_data['recipeName']
            recipe.course_name = form.cleaned_data['courseName']
            recipe.ingredients = form.cleaned_data['ingredients']
            recipe.description = form.cleaned_data['description']
            recipe.save()
            return redirect('recipes_list')
    else:
        form = RecipeForm(initial={
            'recipeName': recipe.recipe_name,
            'courseName': recipe.course_name,
            'ingredients': recipe.ingredients,
            'description': recipe.description,
        })
    return render(request, 'admin_edit_recipe.html', {'form': form})

def delete_recipe(request, recipe_id):
    recipe = get_object_or_404(Recipe, id=recipe_id)
    if request.method == 'POST':
        recipe.delete()
        return redirect('recipes_list')
    return redirect('recipes_list')

def recipes_list(request):
    recipes = Recipe.objects.all()
    return render(request, 'recipes_list.html', {'recipes': recipes})




def recipe_detail(request, recipe_id):
    recipe = get_object_or_404(Recipe, id=recipe_id)
    if request.user in recipe.like.all():
        return render(request, 'recipe.html', {'recipe': recipe, 'addFavorite': False})
    else:
        return render(request, 'recipe.html', {'recipe': recipe, 'addFavorite': True})
    
def recipe(request):
    return render(request, 'recipe.html')

def recipe_search(request):
    return render(request, 'recipe_search.html')


def like_or_unlike(request,id):
    product = Recipe.objects.get(id=id)

    if request.user in product.like.all():
        product.like.remove(request.user)
        recipe = get_object_or_404(Recipe, id=id)
        return render(request, 'recipe.html', {'recipe': recipe, 'addFavorite': True})
    else:
        product.like.add(request.user)
        recipe = get_object_or_404(Recipe, id=id)
        return render(request, 'recipe.html', {'recipe': recipe, 'addFavorite': False})
    
    
def user_favourites(request):
    user_favourites = Recipe.objects.filter(like=request.user)
    return render(request,'favorites.html',{'favorites':user_favourites})


def categories_list(request):
    categories = Category.objects.all()
    return render(request, 'categories.html', {'categories': categories})


def category_recipes(request, category):
    recipes = Recipe.objects.filter(course_name=category)


    return render(request, 'recipes_list.html', {'recipes': recipes})