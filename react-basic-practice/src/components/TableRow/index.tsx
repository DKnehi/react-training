import React from "react";
import { Tr, TableRowProps } from "@chakra-ui/react";

const TableRow: React.FC<TableRowProps> = ({ children, ...rest }) => (
  <Tr {...rest}>{children}</Tr>
);

export default TableRow;
