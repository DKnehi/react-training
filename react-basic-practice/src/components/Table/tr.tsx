import React from "react";
import { Tr as ChakraTr, TableRowProps } from "@chakra-ui/react";

const Tr: React.FC<TableRowProps> = ({ ...rest }) => {

  return (
    <ChakraTr {...rest} />
  );
};

export default Tr;
