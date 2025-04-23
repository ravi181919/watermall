from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from django.contrib.auth import authenticate
from ecom.models import Customer, Product, Orders, Feedback, User, Cart
from .serializer import (
    CustomerSerializer,
    ProductSerializer,
    OrdersSerializer,
    FeedbackSerializer,
    CartSerializer
)

class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class OrdersViewSet(viewsets.ModelViewSet):
    queryset = Orders.objects.all()
    serializer_class = OrdersSerializer

class FeedbackViewSet(viewsets.ModelViewSet):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer




# Admin Login View
class AdminLogin(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        # Authenticate admin user
        user = authenticate(username=username, password=password)
        if user is not None and user.is_staff:  # Ensure only admin users can log in
            return Response({"message": "Admin login successful"}, status=status.HTTP_200_OK)
        return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)


# Admin Click View
class AdminClick(APIView):
    def get(self, request):
        # Logic for fetching admin click data
        data = {"message": "Admin Click Success"}
        return Response(data, status=status.HTTP_200_OK)


# Admin Dashboard View
class AdminDashboard(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        # Logic for returning admin dashboard data
        
         # Fetch counts
        customercount = Customer.objects.all().count()
        productcount = Product.objects.all().count()
        ordercount = Orders.objects.all().count()

        # Fetch recent orders with related products and customers
        orders = Orders.objects.all()
        order_data = []
        for order in orders:
            order_data.append({
                'order': OrdersSerializer(order).data,
                'product': ProductSerializer(order.product).data,
                'customer': CustomerSerializer(order.customer).data,
            })

        # Prepare the response data
        response_data = {
            'customercount': customercount,
            'productcount': productcount,
            'ordercount': ordercount,
            'orders': order_data,
        }

        return Response(response_data, status=status.HTTP_200_OK)
        
        
        # For testing:=
        # data = {"dashboard_data": "Here is some admin-related information"}
        # return Response(data, status=status.HTTP_200_OK)


# Cart CRUD API
class CartAPI(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, pk=None):
        if pk:
            # Fetch a single cart item by pk
            try:
                cart = Cart.objects.get(pk=pk)
                serializer = CartSerializer(cart)
                return Response(serializer.data, status=status.HTTP_200_OK)
            except Cart.DoesNotExist:
                return Response({"error": "Cart not found"}, status=status.HTTP_404_NOT_FOUND)
        else:
            # Fetch all cart items if no pk is provided
            carts = Cart.objects.all()
            serializer = CartSerializer(carts, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        # Create a new cart item
        serializer = CartSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        # Update an existing cart item
        try:
            cart = Cart.objects.get(pk=pk)
        except Cart.DoesNotExist:
            return Response({"error": "Cart not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = CartSerializer(cart, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        # Delete a cart item
        try:
            cart = Cart.objects.get(pk=pk)
        except Cart.DoesNotExist:
            return Response({"error": "Cart not found"}, status=status.HTTP_404_NOT_FOUND)

        cart.delete()
        return Response({"message": "Cart deleted"}, status=status.HTTP_204_NO_CONTENT)