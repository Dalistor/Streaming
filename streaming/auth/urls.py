from django.contrib import admin
from django.urls import path

from auth import views

urlpatterns = [
    path('register/', views.homePage),
    path('submit_register/', views.submit_register)
]
