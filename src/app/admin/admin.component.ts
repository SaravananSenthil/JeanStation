import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  products: { id: number, name: string, description: string, price: number }[] = [];
  orders: { id: number, status: string, details?: string }[] = [];

  newProduct = { name: '', description: '', price: 0 };
  editMode = false;
  productToEdit: any = null;

  addProduct() {
    if (this.editMode) {
      this.updateProduct();
    } else {
      const newProductId = this.products.length ? this.products[this.products.length - 1].id + 1 : 1;
      this.products.push({ id: newProductId, ...this.newProduct });
      this.newProduct = { name: '', description: '', price: 0 }; // Reset form
    }
  }

  editProduct(product: any) {
    this.editMode = true;
    this.productToEdit = product;
    this.newProduct = { ...product };
  }

  updateProduct() {
    const index = this.products.findIndex(p => p.id === this.productToEdit.id);
    if (index !== -1) {
      this.products[index] = { id: this.productToEdit.id, ...this.newProduct };
    }
    this.cancelEdit();
  }

  cancelEdit() {
    this.editMode = false;
    this.productToEdit = null;
    this.newProduct = { name: '', description: '', price: 0 }; // Reset form
  }

  deleteProduct(productId: number) {
    this.products = this.products.filter(product => product.id !== productId);
  }

  viewOrderDetails(order: any) {
    const orderToView = this.orders.find(o => o.id === order.id);
    if (orderToView) {
      alert(`Order Details:\n\nID: ${orderToView.id}\nStatus: ${orderToView.status}\nDetails: ${orderToView.details}`);
    }
  }

  updateOrderStatus(order: any, status: string) {
    const orderToUpdate = this.orders.find(o => o.id === order.id);
    if (orderToUpdate) {
      orderToUpdate.status = status;
    }
  }

  deleteOrder(orderId: number) {
    this.orders = this.orders.filter(order => order.id !== orderId);
  }
}
