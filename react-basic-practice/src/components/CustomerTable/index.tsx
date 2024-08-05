import React, { useEffect, useState } from "react";
import {
  Th,
  Tr,
  Thead,
  Tbody,
  Td,
  Table as ChakraTable,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { ICustomer, ICustomerTableProps, SortConfigType } from "@types";
import TableRow from "../TableRow";
import { SortingIcon } from "@icons";
import { fetchUsers } from "@services";
import { ERROR_MESSAGES } from "@constants";

const CustomerTable: React.FC<ICustomerTableProps> = ({
  columns,
  action,
  data,
}) => {
  const [sortConfig, setSortConfig] = useState<SortConfigType>();
  const [dataCustomers, setDataCustomers] = useState<ICustomer[]>(data);
  const toast = useToast();

  /**
   * Fetches user data from the API with the current sorting configuration and updates the state.
   * @returns {Promise<void>} - A promise that resolves when the data has been fetched and state has been updated.
   */
  const fetchData = async () => {
    try {
      const result = await fetchUsers(sortConfig);
      setDataCustomers(result);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : ERROR_MESSAGES.UNKNOWN_ERROR;
      toast({
        status: "error",
        description: errorMessage,
      });
    }
  };

  useEffect(() => {
    setDataCustomers(data);
  }, [data]);

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
          return;
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
              {...(key === "options" && {
                padding: "0 !important",
              })}
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
        {dataCustomers.map(({ id, status, ...cell }) => (
          <TableRow status={status} key={id}>
            {columns.map((column) => (
              <Td
                key={column.key}
                textAlign={
                  ["rate", "balance", "deposit"].includes(column.key)
                    ? "right"
                    : "left"
                }
                {...(column.key === "name",
                "description",
                "rate",
                "balance",
                "deposit" && {
                  padding: "12px 50px 12px 20px",
                })}
                {...(column.key === "options" && {
                  padding: "0",
                })}
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
