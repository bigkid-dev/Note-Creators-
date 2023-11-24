from django.db import models
from django.utils.translation import gettext_lazy as _
from django.utils import timezone
from django.conf import settings

User = settings.AUTH_USER_MODEL


class File_Content(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    files = models.FileField(_("Attach a file Content"), upload_to="Files/", max_length=100)


class FileContent(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    files = models.FileField(_("Attach a file Content"), upload_to="Files/", max_length=100)


class Notes(models.Model):
    users = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(_("title of the notes"), max_length=50)
    content = models.CharField(_("title of the notes"), max_length=50)

    #attach multiple files to Notes
    file_content = models.ManyToManyField(FileContent)
    time_stamp = models.DateTimeField(default=timezone.now)


    
