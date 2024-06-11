import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  adminUrl='https://localhost:7053/api/Admins';
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.adminUrl}/products`).pipe(
      catchError(this.handleError<any[]>('getAllProducts', []))
    );
  }

  getAllOrders(): Observable<any[]> {
    return this.http.get<any[]>(`${this.adminUrl}/orders`).pipe(
      catchError(this.handleError<any[]>('getAllOrders', []))
    );
  }

  addProduct(product: any): Observable<any> {
    return this.http.post<any>(`${this.adminUrl}/products`, product).pipe(
      catchError(this.handleError<any>('addProduct'))
    );
  }

  editProduct(productId: string, updatedProduct: any): Observable<any> {
    return this.http.put<any>(`${this.adminUrl}/products/${productId}`, updatedProduct).pipe(
      catchError(this.handleError<any>('editProduct'))
    );
  }

  deleteProduct(productId: string): Observable<any> {
    return this.http.delete<any>(`${this.adminUrl}/products/${productId}`).pipe(
      catchError(this.handleError<any>('deleteProduct'))
    );
  }

  updateOrderStatus(orderId: string, status: string): Observable<any> {
    return this.http.patch<any>(`${this.adminUrl}/orders/${orderId}`, { status }).pipe(
      catchError(this.handleError<any>('updateOrderStatus'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
