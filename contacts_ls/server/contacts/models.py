from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

class Contact(models.Model):
    """Contact model"""
    name = models.CharField(max_length=30)
    phone_number = PhoneNumberField()
    image = models.ImageField(upload_to= 'images/')
