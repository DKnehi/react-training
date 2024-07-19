import React from "react";
import { Th, Tr, Thead, Tbody, Table as ChakraTable } from "@chakra-ui/react";
import { SortingIcon } from "@icons";
import { ICustomerTableProps } from "@types";
import TableRow from "../TableRow";
import TableCell from "../TableCell";

const CustomerTable: React.FC<ICustomerTableProps> = ({ columns, data }) => {
  return (
    <ChakraTable>
      <Thead>
        <Tr>
          {columns.map((column) => (
            <Th
              key={column.key}
              {...(column.sortable && { display: "flex", gap: "2px" })}
            >
              {column.label}
              {column.sortable && <SortingIcon />}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {data.map((cell) => {
          return (
            <TableRow>
              {columns.map((column) => {
                return <TableCell>{column.value(cell)}</TableCell>;
              })}
            </TableRow>
          );
        })}
      </Tbody>
    </ChakraTable>
  );
};

export default CustomerTable;
