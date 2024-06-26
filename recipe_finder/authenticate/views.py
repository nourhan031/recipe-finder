from django.shortcuts import render, redirect
from django.contrib.auth import login,authenticate
from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie
from .forms import CustomAuthenticationForm, CustomUserCreationForm

def signup_view(request):
    if request.method == 'POST' and request.headers.get('x-requested-with') == 'XMLHttpRequest':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            role = form.cleaned_data.get('role')
            login(request, user)
            return JsonResponse({'success': True})
        else:
            errors = form.errors.as_json()
            return JsonResponse({'success': False, 'message': errors})
    else:
        form = CustomUserCreationForm()
    return render(request, 'signup.html', {'form': form})

def login_view(request):
    if request.method == 'POST' and request.headers.get('x-requested-with') == 'XMLHttpRequest':
        form = CustomAuthenticationForm(request, request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            role = form.cleaned_data.get('role') 
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                return JsonResponse({'success': True})
            else:
                return JsonResponse({'success': False, 'message': 'Invalid credentials'})
        else:
            errors = form.errors.as_json()
            return JsonResponse({'success': False, 'message': errors})
    else:
        form = CustomAuthenticationForm()
    return render(request, 'login.html', {'form': form})