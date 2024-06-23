from django.shortcuts import render, redirect, get_object_or_404
from .models import Recipe
from .forms import RecipeForm

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
            recipe.name = form.cleaned_data['recipeName']
            recipe.course = form.cleaned_data['courseName']
            recipe.ingredients = form.cleaned_data['ingredients']
            recipe.description = form.cleaned_data['description']
            recipe.save()
            return redirect('recipes_list')
    else:
        form = RecipeForm(initial={
            'recipeName': recipe.name,
            'courseName': recipe.course,
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

def category_recipes(request, category=None):
    if category:
        recipes = Recipe.objects.filter(category=category)
    else:
        recipes = Recipe.objects.all()
    
    return render(request, 'categories.html', {'recipes': recipes})


def recipe_detail(request, recipe_id):
    recipe = get_object_or_404(Recipe, id=recipe_id)
    return render(request, 'recipes/recipe.html', {'recipe': recipe})

def recipe_search(request):
    return render(request, 'recipe_search.html')

def recipe_favorites(request):
    return render(request, 'recipe_favorites.html')