import React from "react";
import { InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Input from "../Input";

const Search: React.FC = () => {

  return (
    <InputGroup maxWidth="320px">
      <InputLeftElement height="32px" width="none" padding="0 0 0 13px" pointerEvents="none">
        <SearchIcon boxSize="14px" color="gullGray" />
      </InputLeftElement>
      <Input variant="search" placeholder="Search..."/>
    </InputGroup>
  );
};

export default Search;
