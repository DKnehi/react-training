import React from "react";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { OptionIcon, ViewIcon, EditIcon, DeleteIcon } from "@icons";
import { IOptionMenuProps } from "@types";

const OptionMenu: React.FC<IOptionMenuProps> = ({
  onView,
  onEdit,
  onDelete,
}) => {
  return (
    <Menu>
      <MenuButton as={IconButton} icon={<OptionIcon />} variant="none" />
      <MenuList>
        <MenuItem onClick={onView} icon={<ViewIcon />}>
          View
        </MenuItem>
        <MenuItem onClick={onEdit} icon={<EditIcon />}>
          Edit
        </MenuItem>
        <MenuItem onClick={onDelete} icon={<DeleteIcon />} color="brickRed">
          Delete
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default OptionMenu;
