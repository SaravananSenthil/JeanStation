import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId: string | null = null;
  product: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id');
      this.getProductDetails();
    });
  }

  getProductDetails(): void {
    // Replace this with your actual logic to fetch product details
    // For demonstration purposes, let's initialize a product object with sample data
    const allProducts = [
      { id: '1', name: 'Skinny Jeans', price: 1299.99, description: 'Classic skinny jeans with a modern twist.' },
      { id: '2', name: 'Straight-Leg Jeans', price: 999.99, description: 'Comfortable straight-leg jeans for everyday wear.' },
      { id: '3', name: 'Bootcut Jeans', price: 1199.99, description: 'Stylish bootcut jeans that pair well with boots.' },
      { id: '4', name: 'Boyfriend Jeans', price: 899.99, description: 'Relaxed-fit boyfriend jeans for a casual look.' },
      { id: '5', name: 'High-Waisted Jeans', price: 1099.99, description: 'Flattering high-waisted jeans with a vintage feel.' }
    ];

    this.product = allProducts.find(p => p.id === this.productId) || null;
  }

  addToCart(): void {
    if (this.product) {
      console.log(`Product ${this.product.name} added to cart`);
    }
  }
}
