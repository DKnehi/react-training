import React from "react";
import { Box, useDisclosure } from "@chakra-ui/react";
import { ICustomer } from "@types";
import { Search, Button, Modal, Table, TableColumn } from "@components";

const Dashboard: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // Mock data
  const data: ICustomer[] = [
    {
      name: "Ann Culhane",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nobis non obcaecati reiciendis pariatur. Perferendis pariatur labore, atque mollitia veniam voluptatum cum deserunt facilis at enim, fuga, provident inventore rem.",
      status: "Open",
      rate: "$70.00",
      balance: "-$270.00",
      deposit: "$500.00",
      id: 1,
    },
    {
      name: "user name",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nobis non obcaecati reiciendis pariatur. Perferendis pariatur labore, atque mollitia veniam voluptatum cum deserunt facilis at enim, fuga, provident inventore rem.",
      status: "Paid",
      rate: "$70.00",
      balance: "$270.00",
      deposit: "$500.00",
      id: 2,
    },
    {
      name: "user name",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nobis non obcaecati reiciendis pariatur. Perferendis pariatur labore, atque mollitia veniam voluptatum cum deserunt facilis at enim, fuga, provident inventore rem.",
      status: "Due",
      rate: "$70.00",
      balance: "-$270.00",
      deposit: "$500.00",
      id: 3,
    },
    {
      name: "user name",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nobis non obcaecati reiciendis pariatur. Perferendis pariatur labore, atque mollitia veniam voluptatum cum deserunt facilis at enim, fuga, provident inventore rem.",
      status: "Inactive",
      rate: "$70.00",
      balance: "$270.00",
      deposit: "$500.00",
      id: 4,
    },
  ];

  return (
    <Box>
      <Box
      backgroundColor= "linkWater"
        display="flex"
        justifyContent="space-between"
        width="100%"
        padding="16px 20px"
      >
        <Search />
        <Button label="+ Add Customer" variant="shadow" onClick={onOpen} />
      </Box>
      {/* Table demo */}
      <Table columns={TableColumn} data={data} />
      <Modal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Dashboard;
