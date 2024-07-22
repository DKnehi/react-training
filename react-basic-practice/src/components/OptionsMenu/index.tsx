import React from "react";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { OptionIcon, ViewIcon, EditIcon, DeleteIcon } from "@icons";

interface IconOptionWithMenuProps {
  onView: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const OptionMenu: React.FC<IconOptionWithMenuProps> = ({
  onView,
  onEdit,
  onDelete,
}) => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<OptionIcon></OptionIcon>}
        variant="none"
      />
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
