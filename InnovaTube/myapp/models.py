from django.db import models

# Create your models here.
class Modelusurios(models.Model):
    iduser=models.IntegerField(primary_key=True)
    nombre = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    correo = models.EmailField(unique=True)

class Model_Productos(models.Model):
    idproduct=models.IntegerField(primary_key=True)
    codigo=models.CharField(max_length=40)
    descripcion=models.CharField(max_length=150)
    familia=models.CharField(max_length=40)
