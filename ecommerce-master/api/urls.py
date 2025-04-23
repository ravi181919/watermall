from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken import views
from .views import (
    CustomerViewSet, 
    ProductViewSet, 
    OrdersViewSet, 
    FeedbackViewSet,
    AdminLogin, 
    AdminClick, 
    AdminDashboard, 
    CartAPI
    )

router = DefaultRouter()
router.register('customers', CustomerViewSet, basename='customer')
router.register('products', ProductViewSet, basename='product')
router.register('orders', OrdersViewSet, basename='order')
router.register('feedback', FeedbackViewSet, basename='feedback')

urlpatterns = [
    path('', include(router.urls)),
    path('token-auth/', views.obtain_auth_token),
    path('adminlogin/', AdminLogin.as_view(), name='adminlogin'),
    path('adminclick/', AdminClick.as_view(), name='adminclick'),
    path('admindashboard/', AdminDashboard.as_view(), name='admindashboard'),
    path('cart/', CartAPI.as_view(), name='cart'),
    path('cart/<int:pk>', CartAPI.as_view(), name='cart-detail'),
]
