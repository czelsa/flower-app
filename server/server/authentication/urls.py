from rest_framework.routers import DefaultRouter
from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .views import RegistryUser

urlpatterns = [
    path('register', RegistryUser.as_view(), name="create_user"),
    path('login', jwt_views.TokenObtainPairView.as_view(), name='token_create'),
]
