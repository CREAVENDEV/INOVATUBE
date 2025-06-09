from django.urls import path, include
from .views import RegisterView, LoginView,UserListView



urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('usuarios/', UserListView.as_view(), name='user-list'),


]









