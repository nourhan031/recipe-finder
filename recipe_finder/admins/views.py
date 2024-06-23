from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from .models import AdminData
from recipes.forms import RecipeForm  # Assuming you have a form for recipe input
from recipes.models import Recipe

def admins_view(request):
    template_name = 'admin_dashboard.html'
    context = {
        # Add context data here (login data)
    }
    return render(request, template_name, context)

def admin_add_recipe_view(request):
    template_name = 'admin_add_recipe.html'
    form = RecipeForm(request.POST or None)

    if request.method == 'POST' and form.is_valid():
        # Process form data and save to AdminData model
        recipe_data = Recipe(
            recipe_name=form.cleaned_data['recipeName'],
            course_name=form.cleaned_data['courseName'],
            ingredients=form.cleaned_data['ingredients'],
            description=form.cleaned_data['description']
        )
        recipe_data.save()

        # Redirect to success URL
        return redirect('admin_add_recipe') 

    context = {
        'form': form
    }
    return render(request, template_name, context)
