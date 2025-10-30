import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  rememberMe: boolean = false;
  showPassword: boolean = false;
  isLoading: boolean = false;

  constructor(private router: Router) { }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    if (this.username && this.password) {
      this.isLoading = true;

      // Simulate API call
      setTimeout(() => {
        console.log('Login:', { username: this.username, password: this.password, rememberMe: this.rememberMe });
        this.isLoading = false;
        // TODO: Implement actual login logic
        this.router.navigate(['/']);
      }, 1500);
    }
  }

  loginWithGoogle(): void {
    console.log('Login with Google');
    // TODO: Implement Google login
  }

  loginWithFacebook(): void {
    console.log('Login with Facebook');
    // TODO: Implement Facebook login
  }
}

