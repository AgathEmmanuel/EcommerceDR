from django.contrib.auth import get_user_model
User=get_user_model()
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions


class SignupView(APIView):
    permission_classes=(permissions.AllowAny, )
    def post(self, request, format=None):
        data=self.request.data
        name=data['name']
        email=data['email']
        password=data['password']
        password1=data['password1']
        if password==password1:
            if User.objects.filter(email=email).exists():
                return Response({'error':'Emails exists'})
            else: 
                if len(password)<10:
                    return Response({'error':'Password should have more than 10 characters'})
                else:
                    user=User.objects.create_user(email=email,password=password,name=name)
                    user.save()
                    return Response({'sucess':'Your registration was successful'})
        else:
            return Response({'error':'Passwords  not match'})



# Create your views here.
