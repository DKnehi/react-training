import React, { useState } from "react";
import {
  Th,
  Tr,
  Thead,
  Tbody,
  Td,
  Table as ChakraTable,
  IconButton,
} from "@chakra-ui/react";
import { ICustomer, ICustomerTableProps } from "@types";
import TableRow from "../TableRow";
import { SortingIcon } from "@icons";

const CustomerTable: React.FC<ICustomerTableProps> = ({
  columns,
  data,
  action,
}) => {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof ICustomer;
    direction: "asc" | "desc";
  } | null>(null);

  const sortedData = React.useMemo(() => {
    if (sortConfig !== null) {
      const { key, direction } = sortConfig;
      const sorted = [...data].sort((a, b) => {
        if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
        if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
        return 0;
      });
      return sorted;
    }
    return data;
  }, [data, sortConfig]);

  const handleSort = (key: keyof ICustomer) => {
    setSortConfig((prevConfig) => {
      if (prevConfig?.key === key) {
        if (prevConfig.direction === "desc") {
          return null;
        }
        return {
          key,
          direction: prevConfig.direction === "asc" ? "desc" : "asc",
        };
      }
      return { key, direction: "asc" };
    });
  };

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
              {...(sortable && { display: "flex", alignItems: "center" })}
            >
              {label}
              {sortable && (
                <IconButton
                  icon={
                    <SortingIcon
                      isAscending={
                        sortConfig?.key === key
                          ? sortConfig.direction === "asc"
                          : true
                      }
                      isActive={sortConfig?.key === key}
                    />
                  }
                  onClick={() => handleSort(key as keyof ICustomer)}
                  variant="none"
                  aria-label={`Sort by ${label}`}
                />
              )}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {sortedData.map(({ id, status, ...cell }) => {
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
                    {column.key === "options"
                      ? column.value({ id, status, ...cell }, action)
                      : column.value({ id, status, ...cell })}
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
