import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  orders: any[] = []; // Assuming this array holds order data

  constructor() {}

  ngOnInit(): void {
    // Initialize orders array with sample data
    this.orders = [
      { id: 1, status: 'Pending' },
      { id: 2, status: 'Processing' },
      { id: 3, status: 'Shipped' },
      { id: 4, status: 'Delivered' }
    ];
  }

  updateOrderStatus(orderId: number, newStatus: string): void {
    // Find the order in the array by its ID
    const orderToUpdate = this.orders.find(order => order.id === orderId);
    
    // If the order is found, update its status
    if (orderToUpdate) {
      orderToUpdate.status = newStatus;
    }
  }
}



