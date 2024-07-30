export interface IOptionMenuProps {
  menuButtonIcon?: React.ReactNode;
  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

export type TypeSortDirection = "asc" | "desc";
