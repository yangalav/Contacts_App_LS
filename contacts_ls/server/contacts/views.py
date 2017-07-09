from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from django.shortcuts import redirect
from django.http import Http404
from contacts.models import Contact
from contacts.serializers import ContactSerializer

class ContactViewSet(viewsets.ModelViewSet):
    """ViewSet for viewing and editing Contact objects """
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def create(self, request, format=None):
        serializer = ContactSerializer(data=request.data)
        contact = Contact(name=request.data['name'],phone_number=request.data['phone_number'],image='/images/what.png')
        contact.save()
        return redirect('/')
        return Response({'detail': 'Contact created'})

    def delete(self, request, pk, format=None):
        contact = self.get_object(pk)
        contact.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
