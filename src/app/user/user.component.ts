import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: any;

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const userId = this.authService.isAuthenticated() ? 'currentUserId' : null;
    if (userId) {
      this.userService.getUserDetails(userId).subscribe(user => this.user = user);
    }
  }

  updateUserDetails(): void {
    if (this.user) {
      this.userService.updateUserDetails(this.user.id, this.user).subscribe(
        (        updatedUser: any) => {
          this.user = updatedUser;
          // Handle success
        },
        (        error: any) => {
          // Handle error
        }
      );
    }
  }

  deleteUser(): void {
    if (this.user) {
      this.userService.deleteUser(this.user.id).subscribe(
        () => {
          // Handle successful deletion (e.g., logout the user, navigate to login page, etc.)
          this.authService.logout();
        },
        (        error: any) => {
          // Handle error
        }
      );
    }
  }
}


