import React, { useEffect, useState } from "react";
import {
  Th,
  Tr,
  Thead,
  Tbody,
  Td,
  Table as ChakraTable,
  IconButton,
} from "@chakra-ui/react";
import { ICustomer, ICustomerTableProps, SortConfigType } from "@types";
import TableRow from "../TableRow";
import { SortingIcon } from "@icons";
import { fetchUsers } from "@services";

const CustomerTable: React.FC<ICustomerTableProps> = ({ columns, action }) => {
  const [dataCustomer, setDataCustomer] = useState<ICustomer[]>([]);
  const [sortConfig, setSortConfig] = useState<SortConfigType | undefined>();

  /**
   * Fetches user data from the API with the current sorting configuration and updates the state.
   * @returns {Promise<void>} - A promise that resolves when the data has been fetched and state has been updated.
   */
  const fetchData = async () => {
    try {
      const result = await fetchUsers(sortConfig);
      setDataCustomer(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [sortConfig]);

  /**
   * Handles the sorting logic when a column header is clicked.
   * @param {keyof ICustomer} key - The key of the column to sort by.
   */
  const handleSort = (key: keyof ICustomer) => {
    setSortConfig((prevConfig) => {
      if (prevConfig?.key === key) {
        if (prevConfig.direction === "desc") {
          return undefined;
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
        {dataCustomer.map(({ id, status, ...cell }) => (
          <TableRow status={status} key={id}>
            {columns.map((column) => (
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
            ))}
          </TableRow>
        ))}
      </Tbody>
    </ChakraTable>
  );
};

export default CustomerTable;
