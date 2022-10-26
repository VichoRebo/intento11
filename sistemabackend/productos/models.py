from django.db import models

# Create your models here.
class Productos(models.Model):
    nombre = models.CharField(max_length=50)
    precio = models.IntegerField()
    descripcion = models.TextField()
    stock = models.IntegerField()
    imagen = models.ImageField(upload_to='productos')
