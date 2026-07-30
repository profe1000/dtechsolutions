export interface IPaymentTransactionsResponse {
  status: number;
  message: string;
  data: IPaymentTransactionsResponseData;
  paystackMetadata: PaystackMetadata;
  paypalMetadata: PaypalMetadata;
}

export interface IPaymentTransactionsResponseData {
  id: number;
}

export interface PaystackMetadata {
  transactionId: number;
  paymentType: string;
}

export interface PaypalMetadata {
  transactionId: number;
  paymentType: string;
}

export interface IWalletTransactions {
  status: number;
  message: string;
  data: IWalletTransactionsData[];
  meta: Meta;
}

export interface IWalletTransactionsData {
  id: number;
  amount: string;
  entryId: number;
  entry: string;
  typeId: number;
  type: string;
  description: string;
  verified: boolean;
  dateModified: string;
  dateCreated: string;
}

export interface Meta {
  total: number;
}

// Wallet Withdrawal
export interface IWalletWithdrawal {
  status: number;
  message: string;
  data: IWalletWithdrawalData[];
  meta: Meta;
}

export interface IWalletWithdrawalData {
  id: string;
  withdrawalId: number;
  amount: string;
  amountSent: string;
  description: string;
  typeId: number;
  type: string;
  statusId: string;
  status: string;
  paypalEmail: string;
  bankCode: any;
  bankName: any;
  accountNumber: any;
  paymentGateway: string;
  paymentSentAt: string;
  dateModified: string;
  dateCreated: string;
}

export interface Meta {
  total: number;
}
