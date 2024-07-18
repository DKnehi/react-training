import React, { useState, useEffect } from "react";
import {
  Th,
  Tr,
  Thead,
  Tbody,
  Td,
  Table as ChakraTable,
} from "@chakra-ui/react";
import { SortingIcon } from "@icons";
import { ITableProps } from "@types";
import { fetchUsers } from "@services";
import { Row } from "@types";

const Table: React.FC<ITableProps> = ({ columns }) => {
  const [data, setData] = useState<Row[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchUsers();
        setData(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    };

    loadData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

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
        {data.map((row) => (
          <Tr key={row.id}>
            <Td>{row.name}<p>{row.id}</p></Td>
            <Td>{row.description}</Td>
            <Td>{row.status}</Td>
            <Td>{row.rate}</Td>
            <Td>{row.balance}</Td>
            <Td>{row.deposit}</Td>
          </Tr>
        ))}
      </Tbody>
    </ChakraTable>
  );
};

export default Table;
