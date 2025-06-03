from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Modelusurios,Model_Productos
from .serializer import Serializer_User,Serializer_Productos

####  6LfK4lMrAAAAAJ4xaL_L93KhsD29zAmpfewfHu6g Token re Catcha

##### USUARIOS
class Users_Vista(APIView):
    def get(self, request):
        usuarios=Modelusurios.objects.all()
        serializer = Serializer_User(usuarios, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = Serializer_User(data=request.data)
        if serializer.is_valid():
            serializer.save()  # Guarda el nuevo producto en la base de datos
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

##### USUARIOS #### 
class Productos_Vista(APIView):
    def get(self, request):
        productos=Model_Productos.objects.all()
        serializer = Serializer_Productos(productos, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = Serializer_Productos(data=request.data)
        if serializer.is_valid():
            serializer.save()  # Guarda el nuevo producto en la base de datos
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  
      
      

    
      
      
      
      
      















