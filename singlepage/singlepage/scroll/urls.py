from django.urls import path
from . import views

appname = 'scroll'

urlpatterns = [
    path('', views.index, name='index'),
    path('posts/', views.posts, name='posts')
]
