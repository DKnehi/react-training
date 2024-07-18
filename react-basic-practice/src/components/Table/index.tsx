import React from "react";
import {
  Th,
  Tr,
  Thead,
  Table as ChakraTable,
} from "@chakra-ui/react";
import SortingIcon from "../Icons/sorting";
import { Column } from "src/interfaces/table";

interface TableProps {
  columns: Column[];
}

const Table: React.FC<TableProps> = ({ columns }) => {

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
