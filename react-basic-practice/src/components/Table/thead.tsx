import React from "react";
import { Thead as ChakraThead, TableHeadProps } from "@chakra-ui/react";


const Thead: React.FC<TableHeadProps> = ({ ...rest }) => {

  return (
    <ChakraThead {...rest} />
  );
};

export default Thead;
