export interface Address {
    id: number;
    label: string; // Nhà riêng, Văn phòng, etc.
    fullName: string;
    phone: string;
    street: string;
    ward: string;
    district: string;
    city: string;
    isDefault: boolean;
}

export interface User {
    id: number;
    username: string;
    fullName: string;
    email: string;
    phone: string;
    avatar: string;
    role: string;
    dateOfBirth?: string;
    addresses: Address[];
    defaultAddressId?: number;
}
