import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  @Input() totalAmount: number | undefined;
  @Output() paymentSuccess = new EventEmitter<void>();
  paymentInfo = { cardNumber: '',cardName: '', expiryDate: '', cvv: '' };

  processPayment(): void {
    // Simulate payment processing
    this.paymentSuccess.emit();
  }
}

