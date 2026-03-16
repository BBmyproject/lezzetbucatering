// Type definitions for the catering website

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}
