from django.urls import path
from .views import RetailerListView, RetailerView, TopRetailersView

urlpatterns = [
    path('', RetailerListView.as_view()),
    path('topretailers', TopRetailersView.as_view()),
    path('<pk>', RetailerView.as_view()),
]