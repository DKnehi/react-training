import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { ICustomer } from "@types";
import { Search, Button, Modal, Table, TableColumn } from "@components";

const Dashboard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalHeader, setModalHeader] = useState("Add Customer");
  const [viewData, setViewData] = useState<ICustomer | undefined>(undefined);

  const handleOpenModal = (
    header: string,
    data: ICustomer | undefined = undefined
  ) => {
    setModalHeader(header);
    setViewData(data);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setViewData(undefined);
  };

  const handleAddCustomerClick = () => {
    handleOpenModal("Add Customer");
  };

  const handleAction = (type: "Add" | "Edit" | "View", id?: number) => {
    switch (type) {
      case "Add":
        handleOpenModal("Add Customer");
        break;
      case "Edit":
      case "View":
        if (id !== undefined) {
          const customer = data.find((item) => item.id === id);
          if (customer) {
            handleOpenModal(
              type === "Edit" ? "Edit Customer" : "View Customer",
              customer
            );
          }
        }
        break;
    }
  };

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
          onClick={handleAddCustomerClick}
        />
      </Box>
      {/* Table demo */}
      <Table columns={TableColumn} data={data} action={handleAction} />
      <Modal
        isOpen={isOpen}
        onClose={handleCloseModal}
        headerText={modalHeader}
        viewData={viewData}
      />
    </Box>
  );
};

export default Dashboard;
