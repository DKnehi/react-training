import React from "react";
import { Th, Tr, Thead, Table as ChakraTable } from "@chakra-ui/react";
import SortingIcon from "../Icons/sorting";
import { tableColumns, TableColumn } from "../CustomerTable";

const Table: React.FC = () => {
  return (
    <ChakraTable>
      <Thead>
        <Tr>
          {tableColumns.map((column: TableColumn, index: number) => (
            <Th
              key={index}
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
