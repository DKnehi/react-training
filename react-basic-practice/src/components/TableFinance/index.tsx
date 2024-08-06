import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { ITablePrice } from "@types";
import { extractNumericValue } from "@utils";

const TableFinance: React.FC<ITablePrice> = ({
  value,
  isBalance,
  showCurrency = true,
}) => {
  const numericValue = extractNumericValue(value);
  const color = isBalance
    ? numericValue < 0
      ? "brickRed"
      : "jewel"
    : "riverbed";

  const formattedValue =
    numericValue < 0
      ? `-$${Math.abs(numericValue).toFixed(2)}`
      : `$${numericValue.toFixed(2)}`;

  return (
    <Box fontWeight="normal">
      <Box display="inline-flex">
        <Text fontSize="md" color={color}>
          {formattedValue}
        </Text>
      </Box>
      {showCurrency && (
        <Text fontSize="sm" lineHeight="shorter" color="paleSky">
          CAD
        </Text>
      )}
    </Box>
  );
};

export default TableFinance;
