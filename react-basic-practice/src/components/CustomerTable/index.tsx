import React from "react";
import {
  Th,
  Tr,
  Thead,
  Tbody,
  Td,
  Table as ChakraTable,
  Box,
} from "@chakra-ui/react";
import { SortingIcon } from "src/components/Icons";
import { ICustomerTableProps } from "@types";
import { useDisclosure } from "@chakra-ui/react";
import TableRow from "../TableRow";
import Search from "../Search";
import Button from "../Button";
import Modal from "../Modal";

const CustomerTable: React.FC<ICustomerTableProps> = ({ columns, data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ChakraTable>
        <Thead>
          <Box
            display="flex"
            justifyContent="space-between"
            width="100%"
            position="absolute"
            padding="16px 20px"
          >
            <Search />
            <Button label="+ Add Customer" variant="shadow" onClick={onOpen} />
          </Box>
          <Tr>
            {columns.map(({ key, label, sortable }) => (
              <Th
                key={key}
                textAlign={
                  ["rate", "balance", "deposit"].includes(key)
                    ? "right"
                    : "left"
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
      <Modal isOpen={isOpen} onClose={onClose}></Modal>
    </>
  );
};

export default CustomerTable;
