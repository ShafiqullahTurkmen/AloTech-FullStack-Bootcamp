from django.contrib import admin
from main.models import Like, Post, Comment

# shows comments as inline
class CommentInline(admin.TabularInline):
    model = Comment
    extra = 0   
    readonly_fields = ('user','content')
    can_delete = False

    def has_add_permission(self, request, obj):
        return False

# shows likes as inline
class LikeInline(admin.StackedInline):
    model = Like
    extra = 0   
    readonly_fields = ('user',)
    can_delete = False

    def has_add_permission(self, request, obj):
        return False

# shows posts in admin page
class PostAdmin(admin.ModelAdmin):
    list_display = ["id","content", "author", "created_at", "likes_count", "like_comment_count"]
    list_filter = ["author", "created_at"]
    search_fields = ["content", "author__username"]
    autocomplete_fields = ["author"]
    inlines = [CommentInline, LikeInline]

    def like_comment_count(self, post):
        return f"Likes: {post.likes_count} / Comments: {post.comments_count}"

# shows likes in admin page
class LikeAdmin(admin.ModelAdmin):
    list_display = ["id", "post", "user", "created_at"]
    list_filter = ["created_at"]
    autocomplete_fields = ["post", "user"]

# shows comments in admin page
class CommentAdmin(admin.ModelAdmin):
    list_display = ["id", "post", "user", "created_at"]
    list_filter = ["created_at"]
    autocomplete_fields = ["post", "user"]
    search_fields = ["content", "author__username"]


# registers Post, Like, and Comment models in admin
admin.site.register(Post, PostAdmin)
admin.site.register(Like, LikeAdmin)
admin.site.register(Comment, CommentAdmin)