export interface IOptionMenuProps {
  menuButtonIcon?: React.ReactNode;
  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  onSortAsc?: () => void;
  onSortDesc?: () => void;
}
