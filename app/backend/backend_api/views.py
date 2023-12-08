from django.contrib.auth import authenticate, get_user_model
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import CustomUser
import json

from django.shortcuts import render
from rest_framework import generics
from .serializers import UserSerializer
User = get_user_model()


# Create your views here.
class UserListView (generics.ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer

@csrf_exempt
def creacion_usuario(request):
    if request.method == 'POST':
        try:
            print(request.body)
            data = json.loads(request.body.decode('utf-8'))
            # Procesar los datos como sea necesario
            nombre = data.get('nombre')
            apellido = data.get('apellido')
            correo = data.get('correo')
            contrasena = data.get('contrasena')

            # Realizar operaciones con los datos

            user = CustomUser.objects.create_user(
                email=correo,
                first_name=nombre,
                last_name=apellido,
                password=contrasena
            )
            # Preparar datos para la respuesta JSON
            user_data = {
                'id': user.id,
                'email': user.email,
                'first_name': user.first_name,
                'last_name': user.last_name,
                'password': user.password,
                # Agrega otros campos que desees incluir en la respuesta
            }

            return JsonResponse({'mensaje': 'Solicitud POST procesada correctamente', 'data' : user_data}, status=200)
        except json.JSONDecodeError as e:
            return JsonResponse({'error': f'Error en el formato JSON: {str(e)}'}, status=400)
        except Exception as e:
            return JsonResponse({'error': f'Error no especificado: {str(e)}'}, status=400)
    else:
        return JsonResponse({'mensaje': 'Método no permitido'}, status=405)

@csrf_exempt
def validacion_credenciales_usuario(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username_or_email = data.get('usuario')
        password = data.get('contrasena')
        user = authenticate(request, username=username_or_email, password=password)
        if user:
            # Obtener los detalles del usuario
            user_data = {
                'id': user.id,
                'email': user.email,
                'first_name': user.first_name,
                'last_name': user.last_name,
                'password': user.password,
                # Agrega otros campos que desees incluir en la respuesta
            }
            return JsonResponse({'mensaje': 'Credenciales validas', 'usuario': user_data}, status=200)
        else:
            return JsonResponse({'error': 'Credenciales inválidas'}, status=401)
    return JsonResponse({'mensaje': 'Método no permitido'}, status=405)
