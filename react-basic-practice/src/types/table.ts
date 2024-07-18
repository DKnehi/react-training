export interface ITableProps {
  columns: IColumn[];
}

export interface IColumn {
  key: string;
  label: string;
  sortable?: boolean;
}

export interface Row {
  id: number;
  name: string;
  description: string;
  status: string;
  rate: number;
  balance: number;
  deposit: number;
}
