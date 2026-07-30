// Booking Payment Details
export interface IBookingPaymentDetails {
  status: number;
  message: string;
  data: IBookingPaymentDetailsData;
}

export interface IBookingPaymentDetailsData {
  totalPrice: number;
  fees: Fee[];
}

export interface Fee {
  title: string;
  price: number;
}

// User Get Products
export interface IUserProducts {
  status: number;
  message: string;
  data: IUserProductData[];
  meta: Meta;
}

export interface IUserProductData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  oldPrice?: number;
  shippingFee: number;
  productCategoryId: number;
  productCategory: ProductCategory;
  dateModified: string;
  dateCreated: string;
}

export interface ProductCategory {
  id: number;
  title: string;
}

export interface Meta {
  total: number;
}

// Service Order Log
export interface IServiceOrderLog {
  status: number;
  message: string;
  data: IServiceOrderLogData;
  metadata: Metadata;
}

export interface IServiceOrderLogData {
  id: number;
  vendorSubServiceId: number;
  amount: number;
  amountPaid: any;
  paymentVerified: boolean;
  durationInMinutes: number;
  startDate: string;
  endDate: string;
  contact: Contact;
  dateModified: string;
  dateCreated: string;
}

export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  phoneNumber: string;
}

export interface Metadata {
  paystackMetadata: PaystackMetadata;
}

export interface PaystackMetadata {
  paymentType: string;
  bookingId: number;
  custom_fields: CustomField[];
}

export interface CustomField {
  display_name: string;
  variable_name: string;
  value: any;
}

