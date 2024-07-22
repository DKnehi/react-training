import React from "react";
import { Tr } from "@chakra-ui/react";
import { STATUS } from "@constants";

interface TableRowProps {
  status: string;
  children: React.ReactNode;
}

const TableRow: React.FC<TableRowProps> = ({ status, children }) => {
  let bgColor: string | undefined;

  if (status === STATUS.PAID || status === STATUS.INACTIVE) {
    bgColor = "catsWhite";
  }

  return <Tr bg={bgColor}>{children}</Tr>;
};

export default TableRow;
