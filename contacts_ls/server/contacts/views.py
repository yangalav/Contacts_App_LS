from rest_framework import viewsets
from rest_framework.response import Response

from django.shortcuts import redirect
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

    def delete_person(self, request, pk, format=None):
        queryset = Contact.objects.all.get(pk=pk)
        print("baked potato " + queryset);
        queryset.delete()
        return Response({'detail': 'Contact deleted'})

    def update_person(self, request, pk, format=None):
        print("cheese and crackers");
        queryset = Contact.objects.all.get(pk=pk)
        serializer= ContactSerializer(queryset, data=request.data)
        contact = Contact(name=request.data['name'],phone_number=request.data['phone_number'],image='/images/what.png')
        contact.save()
        return redirect('/')
        return Response({'detail': 'Contact edited'})
