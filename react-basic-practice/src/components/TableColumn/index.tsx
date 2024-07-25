import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { ICustomerColumn, ICustomer } from "@types";
import { TableStatus, TableFinance, OptionMenu } from "@components";
import { ActionType } from "@types";

const createOptionMenuHandler = (
  action: (type: ActionType, id?: number) => void,
  data: ICustomer
) => ({
  onView: () => action("View", data.id),
  onEdit: () => action("Edit", data.id),
  onDelete: () => console.log(`Delete ${data.id}`),
});

const TableColumn: ICustomerColumn[] = [
  {
    key: "name",
    label: "NAME",
    value: (data: ICustomer) => (
      <Box>
        <Text
          fontSize="md"
          fontWeight="medium"
          lineHeight="short"
          letterSpacing="tight"
          color="mirage"
        >
          {data.name}
        </Text>
        <Text
          fontSize="sm"
          fontWeight="normal"
          lineHeight="18px"
          letterSpacing="0.03em"
          color="paleSky"
        >
          {data.id}
        </Text>
      </Box>
    ),
    sortable: true,
  },
  {
    key: "description",
    label: "DESCRIPTION",
    value: (data: ICustomer) => (
      <Text
        isTruncated
        noOfLines={2}
        whiteSpace="normal"
        width="318px"
        fontSize="md"
        fontWeight="normal"
        lineHeight="short"
        color="riverbed"
      >
        {data.description}
      </Text>
    ),
  },
  {
    key: "status",
    label: "STATUS",
    value: (data: ICustomer) => <TableStatus status={data.status} />,
  },
  {
    key: "rate",
    label: "RATE",
    value: (data: ICustomer) => <TableFinance value={data.rate} />,
  },
  {
    key: "balance",
    label: "BALANCE",
    value: (data: ICustomer) => <TableFinance value={data.balance} isBalance />,
  },
  {
    key: "deposit",
    label: "DEPOSIT",
    value: (data: ICustomer) => <TableFinance value={data.deposit} />,
  },
  {
    key: "options",
    value: (
      data: ICustomer,
      action?: (type: ActionType, id?: number) => void
    ) => {
      if (action) {
        const handlers = createOptionMenuHandler(action, data);
        return (
          <OptionMenu
            onView={handlers.onView}
            onEdit={handlers.onEdit}
            onDelete={handlers.onDelete}
          />
        );
      }
    },
  },
];

export default TableColumn;
