from rest_framework.serializers import (
    HyperlinkedIdentityField,
    HyperlinkedRelatedField,
    ModelSerializer,
)

from .models import (
    Post,
)

class PostSerializer(ModelSerializer):

    def get_validation_exclusions(self, *args, **kwargs):
        exclusions = super(PostSerializer, self).get_validation_exclusions(*args, **kwargs)
        return exclusions + ['author']

    class Meta:
        model = Post
        fields = '__all__'