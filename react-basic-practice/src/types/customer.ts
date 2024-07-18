import { ReactNode } from "react";

export interface ICustomer {
  id: number;
  name: string;
  description: string;
  status: string;
  rate: number;
  balance: number;
  deposit: number;
}

export interface ICustomerTableProps {
  columns: ICustomerColumn[];
  data: ICustomer[];
}

export interface ICustomerColumn {
  key: string;
  label: string;
  sortable?: boolean;
  value: (data: ICustomer) => ReactNode;
}
