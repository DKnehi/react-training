import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { ICustomer, ActionType } from "@types";
import {
  Search,
  Button,
  Modal,
  Table,
  TableColumn,
  CustomerForm,
  CustomerView,
} from "@components";
import { MODAL_TITLES } from "@constants";

const Dashboard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Add Customer");
  const [customerData, setCustomerData] = useState<ICustomer>();
  const [isConfirmDelete, setIsConfirmDelete] = useState(false);
  const [deleteData, setDeleteData] = useState<ICustomer>();

  const handleOpenModal = (title: string, data?: ICustomer) => {
    setModalTitle(title);
    setCustomerData(data);
    setIsOpen(true);
    setIsConfirmDelete(false);
  };

  const handleOpenDeleteModal = (customer: ICustomer) => {
    setDeleteData(customer);
    setModalTitle(MODAL_TITLES.DELETE_CUSTOMER);
    setIsConfirmDelete(true);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setCustomerData(undefined);
    setDeleteData(undefined);
  };

  const handleAddCustomer = () => {
    handleOpenModal(MODAL_TITLES.ADD_CUSTOMER);
  };

  const handleAction = (type: ActionType, id?: number) => {
    const customer = id && data.find((item) => item.id === id);

    if (type === "Delete" && customer) {
      handleOpenDeleteModal(customer);
    } else if (customer) {
      handleOpenModal(
        type === "Edit"
          ? MODAL_TITLES.EDIT_CUSTOMER
          : MODAL_TITLES.VIEW_CUSTOMER,
        customer
      );
    }
  };

  const handleConfirmDelete = () => {
    if (deleteData) {
      handleCloseModal();
    }
  };

  const renderModalContent = () =>
    modalTitle === MODAL_TITLES.VIEW_CUSTOMER && customerData ? (
      <CustomerView data={customerData} />
    ) : (
      <CustomerForm data={customerData} />
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
          onClick={handleAddCustomer}
        />
      </Box>
      {/* Table demo */}
      <Table columns={TableColumn} data={data} action={handleAction} />
      <Modal
        isOpen={isOpen}
        onClose={handleCloseModal}
        title={modalTitle}
        isConfirmDelete={isConfirmDelete}
        onConfirmDelete={handleConfirmDelete}
        {...(!isConfirmDelete &&
          modalTitle !== MODAL_TITLES.VIEW_CUSTOMER && {
            onSubmit: handleCloseModal,
          })}
      >
        {renderModalContent()}
      </Modal>
    </Box>
  );
};

export default Dashboard;
