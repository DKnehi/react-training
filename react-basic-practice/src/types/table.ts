export interface ITableProps {
  columns: IColumn[];
}

export interface IColumn {
  key: string;
  label: string;
  sortable?: boolean;
}
