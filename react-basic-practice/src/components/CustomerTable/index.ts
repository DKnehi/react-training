export interface TableColumn {
  label: string;
  accessor?: string;
  sortable?: boolean;
}

export const tableColumns: TableColumn[] = [
  { label: "NAME", sortable: true },
  { label: "DESCRIPTION",},
  { label: "STATUS" },
  { label: "RATE" },
  { label: "BALANCE" },
  { label: "DEPOSIT" },
];
