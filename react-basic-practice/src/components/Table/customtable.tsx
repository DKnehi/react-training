import React from "react";
import { Table, Thead, Th, Tr } from "./index";
import Sorting from "../../assets/icons/column-sorting.svg"

const CustomerTable: React.FC = () => {

  return (
    <Table>
      <Thead>
        <Tr>
          <Th display="flex" gap="2px">NAME <img src={Sorting}/></Th>
          <Th>DESCRIPTION</Th>
          <Th>STATUS</Th>
          <Th>RATE</Th>
          <Th>BALANCE</Th>
          <Th>DEPOSIT</Th>
        </Tr>
      </Thead>
    </Table>
  );
};

export default CustomerTable;
