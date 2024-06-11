import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderId: string | null = null;
  order: any = {};
  deliveryInfo: any = {
    address: '',
    city: '',
    postalCode: ''
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.orderId = params.get('id');
      this.getOrderDetails();
    });
  }

  getOrderDetails(): void {
    // Assuming you have a method to fetch order details by ID
    // Replace this with your actual logic to fetch order details
    if (this.orderId) {
      // Fetch order details based on the orderId
      // For demonstration purposes, we'll use sample data
      this.order = {
        id: this.orderId,
        customerName: '',
        total: 0.00,
        status: 'Pending'
      };
    }
  }

  updateStatus(newStatus: string): void {
    // Implement your logic to update the status of the order
    // For demonstration purposes, let's update the status locally
    if (this.order) {
      this.order.status = newStatus;
    }
  }

  submitDeliveryInfo(): void {
    // Implement your logic to handle the delivery information submission
    console.log('Delivery Information:', this.deliveryInfo);
    // Here, you can also implement any logic to send this information to a backend server
  }
}

