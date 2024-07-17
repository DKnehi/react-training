import React from "react";
import { Table as ChakraTable, TableProps } from "@chakra-ui/react";

const Table: React.FC<TableProps> = ({ ...rest }) => {

  return (
    <ChakraTable {...rest} />
  );
};

export default Table;
