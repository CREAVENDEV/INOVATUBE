from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

#### Clases maquetado
# Create your models here.
class Modelusurios(models.Model):
    ###iduser=models.IntegerField(primary_key=True)
    nombre = models.CharField(max_length=100)
    ##password = models.CharField(max_length=100)
    ##correo = models.EmailField(unique=True)

class Model_Productos(models.Model):
    idproduct=models.IntegerField(primary_key=True)
    ##codigo=models.CharField(max_length=40)
    ##descripcion=models.CharField(max_length=150)
    ##familia=models.CharField(max_length=40)


##### Clases Login 

class UserManager(BaseUserManager):
    def create_user(self, email, password=None,first_name=None, last_name=None,):
        if not email:
            raise ValueError("El usuario debe tener un email")
        user = self.model(email=self.normalize_email(email), first_name=first_name,
            last_name=last_name,)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password, first_name:None, last_name:None):
        user = self.create_user(email, password,first_name, last_name)
        user.is_admin = True
        user.save(using=self._db)
        return user

class User(AbstractBaseUser):
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=30, blank=True, null=True)
    last_name = models.CharField(max_length=30, blank=True, null=True)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    objects = UserManager()
    USERNAME_FIELD = 'email'
