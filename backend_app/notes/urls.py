from django.urls import path
from .views import *

urlpatterns = [
    path('create/',Create_Notes_View.as_view() ),
    path('retrieve/<int:pk>/', Retrieve_Notes_View.as_view()),
    path('update/<int:pk>/', Update_Notes_View.as_view()),
    path('delete/<int:pk>/', Delete_Notes_View.as_view()),
    path('list-all/', All_Notes_View.as_view() ),
    path('me/', Personal_Notes_View.as_view())
]
