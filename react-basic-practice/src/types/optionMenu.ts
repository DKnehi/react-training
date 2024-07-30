import { ICustomer } from "./customer";

export interface IOptionMenuProps {
  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

export type SortDirectionType = "asc" | "desc";

export type SortConfigType = {
  key: keyof ICustomer;
  direction: SortDirectionType;
};
