from rest_framework import serializers
from contacts.models import Contact

class ContactSerializer(serializers.ModelSerializer):
    """Serializer to represent the Contact model """
    class Meta:
        model = Contact
        fields = ("name","phone_number","image")
