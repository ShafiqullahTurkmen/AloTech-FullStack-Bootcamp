from rest_framework import serializers
from django.contrib.auth.models import User
from . models import Comment, Like, Post

# Serializer for User api
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'is_staff']

# Serializer for Post api
class PostSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Post
        fields = ['url', 'author', 'created_at', 'image', 'content']

# Serializer for Comment api
class CommentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Comment
        fields = ['url', 'post', 'user', 'content', 'created_at']

# Serializer for Like api
class LikeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Like
        fields = ['url', 'post', 'user', 'created_at']