import React from "react";
import { InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Input from "@components/Input";

const Search: React.FC = () => {

  const inputLeftElementStyles = {
    height: "32px", 
    width: "none", 
    padding: "0 0 0 12px",
  };

  const searchIconStyles = {
    colors: "gullGray",
    boxSize: "14px",
  };

  return (
    <InputGroup maxWidth="320px">
      <InputLeftElement pointerEvents="none" {...inputLeftElementStyles}>
        <SearchIcon {...searchIconStyles} />
      </InputLeftElement>
      <Input variant="search" placeholder="Search..."/>
    </InputGroup>
  );
};

export default Search;
