import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User, Address } from '../../shared/models/user.model';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  user: User | null = null;
  isAddressModalOpen = false;
  isAddAddressModalOpen = false;

  // New address form
  newAddress: Partial<Address> = {
    label: 'Nhà riêng',
    fullName: '',
    phone: '',
    street: '',
    ward: '',
    district: '',
    city: '',
    isDefault: false
  };

  ngOnInit(): void {
    // Mock user data
    this.user = {
      id: 1,
      username: 'nguyenvana',
      fullName: 'Nguyễn Văn A',
      email: 'nguyenvana@example.com',
      phone: '0912345678',
      avatar: 'https://ui-avatars.com/api/?name=Nguyen+Van+A&size=200&background=0066cc&color=fff&bold=true',
      role: 'Khách hàng',
      dateOfBirth: '15/03/1995',
      defaultAddressId: 1,
      addresses: [
        {
          id: 1,
          label: 'Nhà riêng',
          fullName: 'Nguyễn Văn A',
          phone: '0912345678',
          street: '123 Đường Lê Lợi',
          ward: 'Phường Bến Thành',
          district: 'Quận 1',
          city: 'TP. Hồ Chí Minh',
          isDefault: true
        },
        {
          id: 2,
          label: 'Văn phòng',
          fullName: 'Nguyễn Văn A',
          phone: '0987654321',
          street: '456 Đường Nguyễn Huệ',
          ward: 'Phường Bến Nghé',
          district: 'Quận 1',
          city: 'TP. Hồ Chí Minh',
          isDefault: false
        }
      ]
    };
  }

  getDefaultAddress(): Address | undefined {
    return this.user?.addresses.find(addr => addr.isDefault);
  }

  getFullAddress(address: Address): string {
    return `${address.street}, ${address.ward}, ${address.district}, ${address.city}`;
  }

  openAddressModal(): void {
    this.isAddressModalOpen = true;
  }

  closeAddressModal(): void {
    this.isAddressModalOpen = false;
  }

  openAddAddressModal(): void {
    this.isAddAddressModalOpen = true;
    // Reset form
    this.newAddress = {
      label: 'Nhà riêng',
      fullName: this.user?.fullName || '',
      phone: this.user?.phone || '',
      street: '',
      ward: '',
      district: '',
      city: 'TP. Hồ Chí Minh',
      isDefault: false
    };
  }

  closeAddAddressModal(): void {
    this.isAddAddressModalOpen = false;
  }

  selectAddress(address: Address): void {
    if (this.user) {
      // Update default address
      this.user.addresses.forEach(addr => {
        addr.isDefault = addr.id === address.id;
      });
      this.user.defaultAddressId = address.id;
      this.closeAddressModal();
    }
  }

  deleteAddress(addressId: number, event: Event): void {
    event.stopPropagation();
    if (this.user) {
      const index = this.user.addresses.findIndex(addr => addr.id === addressId);
      if (index > -1) {
        const isDefault = this.user.addresses[index].isDefault;
        this.user.addresses.splice(index, 1);

        // If deleted default address, set first address as default
        if (isDefault && this.user.addresses.length > 0) {
          this.user.addresses[0].isDefault = true;
          this.user.defaultAddressId = this.user.addresses[0].id;
        }
      }
    }
  }

  editAddress(address: Address, event: Event): void {
    event.stopPropagation();
    // TODO: Implement edit functionality
    console.log('Edit address:', address);
  }

  saveNewAddress(): void {
    if (this.user && this.validateAddress()) {
      const newId = Math.max(...this.user.addresses.map(a => a.id), 0) + 1;

      // If this is the first address or marked as default, make it default
      const shouldBeDefault = this.user.addresses.length === 0 || this.newAddress.isDefault;

      if (shouldBeDefault) {
        // Remove default from other addresses
        this.user.addresses.forEach(addr => addr.isDefault = false);
      }

      const address: Address = {
        id: newId,
        label: this.newAddress.label || 'Nhà riêng',
        fullName: this.newAddress.fullName || '',
        phone: this.newAddress.phone || '',
        street: this.newAddress.street || '',
        ward: this.newAddress.ward || '',
        district: this.newAddress.district || '',
        city: this.newAddress.city || '',
        isDefault: shouldBeDefault || false
      };

      this.user.addresses.push(address);

      if (shouldBeDefault) {
        this.user.defaultAddressId = address.id;
      }

      this.closeAddAddressModal();
    }
  }

  validateAddress(): boolean {
    return !!(
      this.newAddress.fullName &&
      this.newAddress.phone &&
      this.newAddress.street &&
      this.newAddress.ward &&
      this.newAddress.district &&
      this.newAddress.city
    );
  }

  handleAvatarError(event: any): void {
    event.target.src = 'https://ui-avatars.com/api/?name=' +
      encodeURIComponent(this.user?.fullName || 'User') +
      '&size=200&background=0066cc&color=fff&bold=true';
  }
}

