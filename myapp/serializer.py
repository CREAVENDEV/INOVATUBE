from rest_framework import serializers
from .models import Modelusurios,Model_Productos


class Serializer_User(serializers.ModelSerializer):
    class Meta:
        db_table = 'usuarios'
        model=Modelusurios
        fields = '__all__'

class Serializer_Productos(serializers.ModelSerializer):
    class Meta:
        db_table = 'productos'
        model=Model_Productos
        fields = '__all__'
