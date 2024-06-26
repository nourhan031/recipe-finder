from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.http import HttpResponse
from django.conf.urls.static import static
from django.shortcuts import render
from recipes import views

def base_view(request):
    return render(request, 'base.html')


urlpatterns = [
    path('', base_view, name='base'),
    path('', include('admins.urls')),
    path('', include('authenticate.urls')),
    path('recipe/', include('recipes.urls')),
    path('admin/', admin.site.urls),
    #path('recipe/<int:id>',views.recipe_detail , name='detail'),
    path('user/favourites',views.user_favourites , name='user_favourites'),
    # path('categories/', views.categories_list, name='categories'),
    # path('categories/<str:category>/', views.category_recipes, name='category_recipes'),
    # path('search/', views.recipe_search, name='recipe_search'),
    #path('recipe/<int:id>/like_or_dislike',views.like_or_unlike , name='like'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)