from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import authenticate
from django.contrib.auth.models import User



class CustomAuthenticationForm(AuthenticationForm):
    role = forms.CharField(max_length=20)

    def clean(self):
        cleaned_data = super().clean()
        role = cleaned_data.get('role')
        if not role:
            raise forms.ValidationError("Role is required")
        # Additional custom validation for 'role' if needed
        return cleaned_data
    
    
class CustomUserCreationForm(UserCreationForm):
    email = forms.EmailField(max_length=254, help_text='Enter a valid email address')
    role = forms.ChoiceField(choices=[('user', 'User'), ('admin', 'Admin')])

    class Meta:
        model = User
        fields = ('username', 'email', 'password1', 'password2', 'role')