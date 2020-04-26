from django.db.models import (
    CASCADE,
    CharField,
    DateTimeField,
    Model,
    TextField,
)

class Post(Model):
    created = DateTimeField(auto_now_add=True)
    content = TextField(blank=True, null=True)
    title = CharField(max_length=255)
    updated = DateTimeField(auto_now=True)