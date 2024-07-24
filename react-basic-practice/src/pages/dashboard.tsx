import React from "react";
import { Box, useDisclosure } from "@chakra-ui/react";
import { ICustomer } from "@types";
import {
  Search,
  Button,
  Modal,
  Table,
  TableColumn,
  OptionMenu,
} from "@components";
import { useState } from "react";

const Dashboard: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalHeaderText, setModalHeaderText] = useState("Add Customer");
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(
    null
  );
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

  const handleEdit = (id: number) => {
    setModalHeaderText("Edit Customer");
    setSelectedCustomerId(id);
    onOpen();
  };

  return (
    <Box>
      <Box
        backgroundColor="linkWater"
        display="flex"
        justifyContent="space-between"
        width="100%"
        padding="16px 20px"
      >
        <Search />
        <Button
          label="+ Add Customer"
          variant="shadow"
          onClick={() => {
            setModalHeaderText("Add Customer");
            setSelectedCustomerId(null);
            onOpen();
          }}
        />
      </Box>
      {/* Table demo */}
      <Table
        columns={TableColumn.map((column) => ({
          ...column,
          value: (data: ICustomer) =>
            column.key === "options" ? (
              <OptionMenu
                onView={() => console.log(`View ${data.id}`)}
                onEdit={() => handleEdit(data.id)}
                onDelete={() => console.log(`Delete ${data.id}`)}
              />
            ) : (
              column.value(data)
            ),
        }))}
        data={data}
      />
      <Modal isOpen={isOpen} onClose={onClose} headerText={modalHeaderText} />
    </Box>
  );
};

export default Dashboard;
