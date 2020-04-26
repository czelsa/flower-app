from django.db.models import (
    CASCADE,
    CharField,
    Model,
    TextField,
)

from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    email = CharField(blank=True,  max_length=120)
    password = CharField(blank=True,  max_length=120)
