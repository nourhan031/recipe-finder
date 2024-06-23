from django import forms

class RecipeForm(forms.Form):
    recipeName = forms.CharField(label='Recipe Name', max_length=100)
    courseName = forms.ChoiceField(label='Course Name', choices=[
        ('Lunch', 'Main course'),
        ('Dessert', 'Dessert'),
        ('Quick & Easy', 'Appetizers')
    ])
    ingredients = forms.CharField(label='Ingredients', widget=forms.Textarea)
    description = forms.CharField(label='Description', widget=forms.Textarea)
