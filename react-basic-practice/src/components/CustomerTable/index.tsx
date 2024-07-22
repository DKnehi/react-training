import React from "react";
import {
  Th,
  Tr,
  Thead,
  Tbody,
  Td,
  Table as ChakraTable,
} from "@chakra-ui/react";
import { SortingIcon } from "@icons";
import { ICustomerTableProps } from "@types";
import TableRow from "../TableRow";

const CustomerTable: React.FC<ICustomerTableProps> = ({ columns, data }) => {
  return (
    <ChakraTable>
      <Thead>
        <Tr>
          {columns.map(({ key, label, sortable }) => (
            <Th
              key={key}
              textAlign={
                ["rate", "balance", "deposit"].includes(key) ? "right" : "left"
              }
              {...(sortable && { display: "flex", gap: "2px" })}
            >
              {label}
              {sortable && <SortingIcon />}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {data.map(({ id, status, ...cell }) => {
          return (
            <TableRow status={status} key={id}>
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
                    {column.value({ id, status, ...cell })}
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
