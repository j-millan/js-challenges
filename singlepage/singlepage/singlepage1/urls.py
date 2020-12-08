from django.urls import path
from . import views

appname = 'app'

urlpatterns = [
    path('', views.index, name='index'),
    path('sections/<int:num>/', views.section, name='section')
]
