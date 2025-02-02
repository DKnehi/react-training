import { ReactNode } from "react";
import { ActionType } from "./action";

export interface ICustomer {
  id?: number;
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
  action?: (type: ActionType, id?: number) => void;
}

export interface ICustomerColumn {
  key: string;
  label?: string;
  sortable?: boolean;
  value: (
    data: ICustomer,
    action?: (type: ActionType, id?: number) => void
  ) => ReactNode;
}

export interface IStatusProps {
  status: StatusType;
}

export type StatusType = "Open" | "Paid" | "Inactive" | "Due";

export interface ITableRowProps {
  status: string;
  children: React.ReactNode;
}

export interface ITablePrice {
  value: string;
  isBalance?: boolean;
  showCurrency?: boolean;
}
