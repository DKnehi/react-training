import React from "react";
import {
  InputGroup,
  InputLeftElement,
  Input,
  InputProps,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Search: React.FC<InputProps> = (props) => {
  const inputCommonStyles = {
    height: "32px",
    borderRadiuses: "xs",
    borderColor: "gullGray",
    _hover: {
      borderColor: "none",
      boxShadow: "none",
    },
    _focus: {
      borderColor: "gullGray",
      boxShadow: "none",
    },
    _placeholder: {
      color: "gullGray",
      fontSize: "s",
      fontWeight: "regular",
    },
  };

  const searchIconStyles = {
    color: "gullGray",
    boxSize: "14px",
  };

  return (
    <InputGroup width="320px">
      <InputLeftElement pointerEvents="none" height="32px">
        <SearchIcon {...searchIconStyles} />
      </InputLeftElement>
      <Input placeholder="Search..." {...inputCommonStyles} {...props} />
    </InputGroup>
  );
};

export default Search;
