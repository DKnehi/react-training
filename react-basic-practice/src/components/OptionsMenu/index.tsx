import React from "react";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import {
  OptionIcon,
  ViewIcon,
  EditIcon,
  DeleteIcon,
  SortingIcon,
} from "@icons";
import { IOptionMenuProps } from "@types";

const OptionMenu: React.FC<IOptionMenuProps> = ({
  menuButtonIcon = <OptionIcon />,
  onView,
  onEdit,
  onDelete,
  onSortAsc,
  onSortDesc,
}) => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={
          React.isValidElement(menuButtonIcon) ? menuButtonIcon : <OptionIcon />
        }
        variant="none"
      />
      <MenuList>
        {onView && (
          <MenuItem onClick={onView} icon={<ViewIcon />}>
            View
          </MenuItem>
        )}
        {onEdit && (
          <MenuItem onClick={onEdit} icon={<EditIcon />}>
            Edit
          </MenuItem>
        )}
        {onDelete && (
          <MenuItem onClick={onDelete} icon={<DeleteIcon />} color="brickRed">
            Delete
          </MenuItem>
        )}
        {onSortAsc && <MenuItem onClick={onSortAsc}>Sort Name A-Z</MenuItem>}
        {onSortDesc && <MenuItem onClick={onSortDesc}>Sort Name Z-A</MenuItem>}
      </MenuList>
    </Menu>
  );
};

export default OptionMenu;
