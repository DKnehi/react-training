import React from "react";
import {
  Th,
  Tr,
  Thead,
  Table as ChakraTable,
} from "@chakra-ui/react";
import { SortingIcon } from "@icons";
import { ITableProps } from "@types";

const Table: React.FC<ITableProps> = ({ columns }) => {

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
    </ChakraTable>
  );
};

export default Table;
