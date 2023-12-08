from django.urls import path
from backend_api.views import creacion_usuario, validacion_credenciales_usuario, UserListView


urlpatterns = [
    path('users/', UserListView.as_view(), name='user-list'),
    path('creacion-usuario/', creacion_usuario, name='creacion_usuario'),
    path('validacion-credenciales-usuario/', validacion_credenciales_usuario, name='validacion_credenciales_usuario'),
]
