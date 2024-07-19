import { ReactNode } from "react";

export interface ICustomer {
  id: number;
  name: string;
  description: string;
  status: StatusType;
  rate: string;
  balance: string;
  deposit: string;
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

export interface IStatusProps {
  status: StatusType;
}

type StatusType = "Open" | "Paid" | "Inactive" | "Due";

export interface ITableRowProps {
  status: string;
  children: React.ReactNode;
}

export interface ITablePrice {
  value: string;
  isBalance?: boolean;
}
