from django.contrib import admin
from django.urls import include, path
from django.http import HttpResponse
from django.shortcuts import render

def base_view(request):
    return render(request, 'base.html')


urlpatterns = [
    path('', base_view, name='base'),
    path('', include('admins.urls')),
    path('', include('authenticate.urls')),
    path('', include('recipes.urls')),
    path('admin/', admin.site.urls),
]