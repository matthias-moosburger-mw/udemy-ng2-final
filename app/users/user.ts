
export class Address {
    street: string;
    suite: string;
    city: string;
    zip: string;    
}

export class User {
    id: number;
    name: string;
    phone: string;
    email: string; 
    address = new Address();
}