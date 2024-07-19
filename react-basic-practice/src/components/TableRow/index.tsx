import React from "react";
import { Tr } from "@chakra-ui/react";

interface TableRowProps {
  status: string;
  children: React.ReactNode;
}

const TableRow: React.FC<TableRowProps> = ({ status, children }) => {
  let bgColor: string | undefined;

  if (status === "Paid" || status === "Inactive") {
    bgColor = "catsWhite";
  }

  return <Tr bg={bgColor}>{children}</Tr>;
};

export default TableRow;
