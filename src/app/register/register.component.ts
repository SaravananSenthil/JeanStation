import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registrationInfo:User={
    username:  '',
    password:  '',
    email:  '',
    role:  '',
    
  };

  constructor(private router: Router) { }

  onSubmit() {
    // Here you would typically handle registration logic such as API calls.
    // For simplicity, we're just redirecting based on the role.

    if (this.registrationInfo.role === 'admin') {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/user']);
    }
  }
}


