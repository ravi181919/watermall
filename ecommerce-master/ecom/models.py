from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Customer(models.Model):
    user=models.OneToOneField(User,on_delete=models.CASCADE)
    profile_pic= models.ImageField(upload_to='profile_pic/CustomerProfilePic/',null=True,blank=True)
    address = models.CharField(max_length=40)
    mobile = models.CharField(max_length=20,null=False)
    @property
    def get_name(self):
        return self.user.first_name+" "+self.user.last_name
    @property
    def get_id(self):
        return self.user.id
    def __str__(self):
        return self.user.first_name


class Product(models.Model):
    name = models.CharField(max_length=100)
    # slug = models.SlugField(unique=True, max_length=150)  
    brand = models.CharField(max_length=100, blank=True, null=True) 
    description = models.TextField() 
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.CharField(max_length=100, blank=True, null=True) 
    subcategory = models.CharField(max_length=100, blank=True, null=True) 
    product_image = models.ImageField(upload_to='product_image/', null=True, blank=True)
    features = models.JSONField(blank=True, null=True)  
    colors = models.JSONField(blank=True, null=True) 
    capacity_ml = models.PositiveIntegerField(blank=True, null=True) 
    weight_grams = models.PositiveIntegerField(blank=True, null=True) 
    height_cm = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True) 
    diameter_cm = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    in_stock = models.BooleanField(default=True)  
    stock_quantity = models.PositiveIntegerField(blank=True, null=True) 
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    updated_at = models.DateTimeField(auto_now=True, null=True)
    slogan = models.CharField(max_length=700, null=True, blank=True)

    def __str__(self):
        return self.name


# Instead of single image, consider a related model for multiple images
# See "ProductImage" model below
# class ProductImage(models.Model):  # Model for multiple product images
#     product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='images')
#     image = models.ImageField(upload_to='product_images/')
#     alt_text = models.CharField(max_length=255, blank=True, null=True)

#     def __str__(self):
#         return self.alt_text or "Product Image"


class Orders(models.Model):
    STATUS =(
        ('Pending','Pending'),
        ('Order Confirmed','Order Confirmed'),
        ('Out for Delivery','Out for Delivery'),
        ('Delivered','Delivered'),
    )
    customer=models.ForeignKey('Customer', on_delete=models.CASCADE,null=True)
    product=models.ForeignKey('Product',on_delete=models.CASCADE,null=True)
    email = models.CharField(max_length=50,null=True)
    address = models.CharField(max_length=500,null=True)
    mobile = models.CharField(max_length=20,null=True)
    order_date= models.DateField(auto_now_add=True,null=True)
    status=models.CharField(max_length=50,null=True,choices=STATUS)


class Feedback(models.Model):
    name=models.CharField(max_length=40)
    feedback=models.CharField(max_length=500)
    date= models.DateField(auto_now_add=True,null=True)
    def __str__(self):
        return self.name


class Cart(models.Model):
    name = models.CharField(max_length=255)
    quantity = models.PositiveIntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name