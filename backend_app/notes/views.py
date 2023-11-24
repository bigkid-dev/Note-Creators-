from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .serializers import (
    NotesSerialiazers
)
from .models import (
    FileContent,
    Notes
)
from rest_framework.views import APIView
from rest_framework.request import Request
from rest_framework.response import Response
from .discord import send_logs

# Create your views here.

class Create_Notes_View(APIView):
    serializer_class = NotesSerialiazers

    def post(self, request, format=None):

        title = request.data["title"]
        content = request.data["content"]
        note = Notes.objects.create(users=request.user, title=title,content=content)
        try:
            
            instance_list = []

            if "media" in request.data:
                files_list = self.request.FILES.getlist('media')
                for each_file in files_list:
                    file_instance = FileContent.objects.create(
                        user=request.user, 
                        files=each_file
                    )
                    
                    instance_list.append(file_instance)
                note = note.file_content.add(*files_list)
            
            note.save()

            response = Notes.objects.filter(pk=note.pk).values()
            return Response(list(response), status=200)
        except Exception as error_message:
            print(error_message)
            send_logs(username="admin", message=error_message)
            return Response({"error":"error"}, status=500)

            


class Retrieve_Notes_View(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = NotesSerialiazers
    queryset = Notes.objects.all()
    


class Update_Notes_View(generics.UpdateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = NotesSerialiazers
    queryset = Notes.objects.all()


class Delete_Notes_View(generics.DestroyAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = NotesSerialiazers
    queryset = Notes.objects.all()



class All_Notes_View(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request:Request, format=None) -> Response:
        all_notes = Notes.objects.all().values()
        return Response(list(all_notes), status=200)



class Personal_Notes_View(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request:Request, format=None) -> Response:
        all_notes = Notes.objects.filter(users=request.user).values()
        return Response(list(all_notes), status=200)


