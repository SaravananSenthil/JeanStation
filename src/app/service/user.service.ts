import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  validateUser(email: string, password: string):Observable<User> {
    throw new Error('Method not implemented.');
  }
  OrderUrl='https://localhost:7053/api/Orders';
  UserUrl='https://localhost:7053/api/Users';
  constructor(private http: HttpClient) {}

  getUserDetails(userId: string): Observable<any> {
    return this.http.get(`${this.UserUrl}/${userId}`).pipe(
      catchError(this.handleError<any>('getUserDetails'))
    );
  }

  updateUserDetails(userId: string, userDetails: any): Observable<any> {
    return this.http.put(`${this.UserUrl}/${userId}`, userDetails).pipe(
      catchError(this.handleError<any>('updateUserDetails'))
    );
  }

  deleteUser(userId: string): Observable<any> {
    return this.http.delete(`${this.UserUrl}/${userId}`).pipe(
      catchError(this.handleError<any>('deleteUser'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}

