import React from "react";
import { Th as ChakraTh, TableColumnHeaderProps } from "@chakra-ui/react";


const Th: React.FC<TableColumnHeaderProps> = ({ ...rest }) => {

  return (
    <ChakraTh {...rest} />
  );
};

export default Th;
