import React from 'react';
import { InputGroup, InputLeftElement, Input, InputProps } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const Search: React.FC<InputProps> = (props) => {
  return (
    <InputGroup width="320px">
      <InputLeftElement
        height="32px"
        pointerEvents="none"
        children={<SearchIcon color="gullGray" boxSize="14px" />}
      />
      <Input
        placeholder="Search..."
        borderRadiuses="xs" 
        height="32px"
        borderColor="gullGray"
        _hover={{ 
          borderColor: 'none',
          boxShadow: 'none',
        }}
        _focus={{ 
          borderColor: 'gullGray',
          boxShadow: 'none',
        }}
        _placeholder={{ 
            color: 'gullGray',
            fontSize: 's', 
            fontWeight: 'regular', 
          }}
        {...props}
      />
    </InputGroup>
  );
};

export default Search;
