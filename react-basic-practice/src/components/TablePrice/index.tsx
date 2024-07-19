import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { ITablePrice } from "@types";

const TablePrice: React.FC<ITablePrice> = ({ value, isBalance }) => {
  let color: string | undefined;
  if (isBalance) {
    const numericValue = parseFloat(value.replace(/[^0-9.-]+/g, ""));
    color = numericValue < 0 ? "brickRed" : "jewel";
  } else {
    color = "riverbed";
  }

  return (
    <Box fontWeight="normal">
      <Text fontSize="md" lineHeight="short" color={color}>
        {value}
      </Text>
      <Text fontSize="sm" lineHeight="shorter" color="paleSky" letterSpacing="">
        CAD
      </Text>
    </Box>
  );
};

export default TablePrice;
