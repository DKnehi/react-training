import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { ITablePrice } from "@types";
import { extractNumericValue } from "@utils";

const TableFinance: React.FC<ITablePrice> = ({
  value,
  isBalance,
  showCurrency = true,
}) => {
  const color = isBalance
    ? extractNumericValue(value) < 0
      ? "brickRed"
      : "jewel"
    : "riverbed";

  return (
    <Box fontWeight="normal">
      <Box display="inline-flex">
        <Text fontSize="md" color={color}>
          $
        </Text>
        <Text fontSize="md" color={color}>
          {value}
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
