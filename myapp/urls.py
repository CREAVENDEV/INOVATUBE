from django.urls import path, include
from .views import Users_Vista,Productos_Vista


urlpatterns = [
    path('Users/', Users_Vista.as_view(), name='Users'),
    path('productos/', Productos_Vista.as_view(), name='productos'),
]







