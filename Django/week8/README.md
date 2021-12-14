### Task 1: create PostViewSet
### Solution:
#### urls.py
```python
from django.contrib import admin
from django.urls import path,include
from rest_framework import routers
from main.views import UserViewSet, PostViewSet, CommentViewSet, LikeViewSet

# registers ViewSets to routers.DefaultRouter(), routers by django_rest_framework :D
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'posts', PostViewSet)
```
#### views.py
```python
from django.db.models import query
from rest_framework import viewsets
from django.contrib.auth.models import User
from . models import Comment, Like, Post

from main.serializers import PostSerializer, UserSerializer, CommentSerializer, LikeSerializer

# ViewSet for Post model
class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

```
#### serializers.py
```python
from rest_framework import serializers
from django.contrib.auth.models import User
from . models import Comment, Like, Post

# Serializer for Post api
class PostSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Post
        fields = ['url', 'author', 'created_at', 'image', 'content']

```

### Task 2: create CommentViewSet
### Solution:
#### urls.py
```python
from django.contrib import admin
from django.urls import path,include
from rest_framework import routers
from main.views import UserViewSet, PostViewSet, CommentViewSet, LikeViewSet

# registers ViewSets to routers.DefaultRouter(), routers by django_rest_framework :D
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'posts', PostViewSet)
router.register(r'comments', CommentViewSet)

```
#### views.py
```python
from django.db.models import query
from rest_framework import viewsets
from django.contrib.auth.models import User
from . models import Comment, Like, Post

from main.serializers import PostSerializer, UserSerializer, CommentSerializer, LikeSerializer


# ViewSet for Comment model
class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer 

```
#### serializers.py
```python
from rest_framework import serializers
from django.contrib.auth.models import User
from . models import Comment, Like, Post

# Serializer for Comment api
class CommentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Comment
        fields = ['url', 'post', 'user', 'content', 'created_at']

```

### Task 3: create LikeViewSet
### Solution:
#### urls.py
```python
from django.contrib import admin
from django.urls import path,include
from rest_framework import routers
from main.views import UserViewSet, PostViewSet, CommentViewSet, LikeViewSet

# registers ViewSets to routers.DefaultRouter(), routers by django_rest_framework :D
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'posts', PostViewSet)
router.register(r'comments', CommentViewSet)
router.register(r'likes', LikeViewSet)

```
#### views.py
```python
from django.db.models import query
from rest_framework import viewsets
from django.contrib.auth.models import User
from . models import Comment, Like, Post

from main.serializers import PostSerializer, UserSerializer, CommentSerializer, LikeSerializer

# ViewSet for Like model
class LikeViewSet(viewsets.ModelViewSet):
    queryset = Like.objects.all()
    serializer_class = LikeSerializer 

```
#### serializers.py
```python
from rest_framework import serializers
from django.contrib.auth.models import User
from . models import Comment, Like, Post

# Serializer for Like api
class LikeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Like
        fields = ['url', 'post', 'user', 'created_at']

```

