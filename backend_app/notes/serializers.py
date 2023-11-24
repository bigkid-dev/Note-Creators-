from rest_framework import serializers
from .models import (
    Notes,
    FileContent
)

class FileContentSerializer(serializers.ModelSerializer):
    users = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )

    class Meta:
        model = FileContent
        fields = "__all__"



class NotesSerialiazers(serializers.ModelSerializer):

    users = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )
    content = serializers.CharField(required=False)
    title = serializers.CharField(required=False)
    class Meta:
        model = Notes
        fields = ["id","users", "title","content", "time_stamp"]

    def validate(self, attrs):
        error = {}
        if attrs.get("content") == None and attrs.get("title") == None and self.context["request"].method in ["POST"]:
            error["error"] = "Requires a content field or title field"
            raise serializers.ValidationError(error)
        
        return super().validate(attrs)
