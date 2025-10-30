import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  phone: string = '';
  password: string = '';
  confirmPassword: string = '';
  agreeTerms: boolean = false;
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  isLoading: boolean = false;

  constructor(private router: Router) { }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  validatePhone(): boolean {
    const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;
    return phoneRegex.test(this.phone);
  }

  validatePassword(): boolean {
    return this.password.length >= 6;
  }

  passwordsMatch(): boolean {
    return this.password === this.confirmPassword && this.confirmPassword !== '';
  }

  isFormValid(): boolean {
    return this.validatePhone() &&
      this.validatePassword() &&
      this.passwordsMatch() &&
      this.agreeTerms;
  }

  onSubmit(): void {
    if (this.isFormValid()) {
      this.isLoading = true;

      // Simulate API call
      setTimeout(() => {
        console.log('Register:', { phone: this.phone, password: this.password });
        this.isLoading = false;
        // TODO: Implement actual registration logic
        this.router.navigate(['/auth/login']);
      }, 1500);
    }
  }

  registerWithGoogle(): void {
    console.log('Register with Google');
    // TODO: Implement Google registration
  }

  registerWithFacebook(): void {
    console.log('Register with Facebook');
    // TODO: Implement Facebook registration
  }
}

