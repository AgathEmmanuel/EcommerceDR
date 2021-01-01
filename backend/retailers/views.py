from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions
from .models import Retailer
from .serializers import RetailerSerializer


class RetailerListView(ListAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Retailer.objects.all()
    serializer_class = RetailerSerializer
    pagination_class = None

class RetailerView(RetrieveAPIView):
    queryset = Retailer.objects.all()
    serializer_class = RetailerSerializer

class TopRetailersView(ListAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Retailer.objects.filter(top_retailers=True)
    serializer_class = RetailerSerializer
    pagination_class = None