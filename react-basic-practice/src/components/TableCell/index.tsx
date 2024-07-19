import React from "react";
import { Td, TableCellProps } from "@chakra-ui/react";

const TableCell: React.FC<TableCellProps> = ({ children, ...rest }) => {
  return <Td {...rest}>{children}</Td>;
};

export default TableCell;
