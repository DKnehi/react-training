import React from "react";
import { Th, Tr, Thead, Tbody, Td, Table as ChakraTable } from "@chakra-ui/react";
import { SortingIcon } from "@icons";
import { ICustomerTableProps } from "@types";
import TableRow from "../TableRow";
// import TableCell from "../TableColumn";

const CustomerTable: React.FC<ICustomerTableProps> = ({ columns, data }) => {
  return (
    <ChakraTable>
      <Thead>
        <Tr>
          {columns.map((column) => (
            <Th
              key={column.key}
              textAlign={
                ["rate", "balance", "deposit"].includes(column.key)
                  ? "right"
                  : "left"
              }
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
            <TableRow status={cell.status} key={cell.id}>
              {columns.map((column) => {
                return (
                  <Td
                    key={column.key}
                    textAlign={
                      ["rate", "balance", "deposit"].includes(column.key)
                        ? "right"
                        : "left"
                    }
                  >
                    {column.value(cell)}
                  </Td>
                );
              })}
            </TableRow>
          );
        })}
      </Tbody>
    </ChakraTable>
  );
};

export default CustomerTable;
