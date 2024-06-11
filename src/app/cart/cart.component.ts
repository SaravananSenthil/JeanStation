import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any[] = [];
  newProduct: any = {
    name: '',
    price: 0,
    quantity: 1
  };

  constructor() {}

  ngOnInit(): void {
  }

  addToCart(): void {
    const newProductToAdd = { ...this.newProduct, id: this.cart.length + 1 };
    this.cart.push(newProductToAdd);
    this.resetNewProduct();
  }

  removeFromCart(productId: number): void {
    this.cart = this.cart.filter(product => product.id !== productId);
  }

  updateQuantity(productId: number, quantity: number): void {
    const product = this.cart.find(product => product.id === productId);
    if (product) {
      product.quantity = quantity;
    }
  }

  resetNewProduct(): void {
    this.newProduct = { name: '', price: 0, quantity: 1 };
  }
}
