import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { IStatusProps } from "@types";

const statusStyles = {
  Open: { backgroundColor: "whiteLilac", color: "royalBlue" },
  Paid: { backgroundColor: "scandal", color: "jewel" },
  Inactive: { backgroundColor: "catskillWhite", color: "shuttleGray" },
  Due: { backgroundColor: "amour", color: "brickRed" },
};

const TableStatus: React.FC<IStatusProps> = ({ status }) => {
  return (
    <Box
      display="inline-block"
      px="10px"
      py="1px"
      borderRadius="md"
      {...statusStyles[status]}
    >
      <Text fontWeight="bold">{status}</Text>
    </Box>
  );
};

export default TableStatus;
