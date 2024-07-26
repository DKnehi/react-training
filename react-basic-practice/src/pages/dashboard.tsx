import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
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
import { MODAL_TITLES, MODAL_DESCRIPTION } from "@constants";
import { fetchUsers } from "@services";

const Dashboard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Add Customer");
  const [customerData, setCustomerData] = useState<ICustomer>();
  const [isConfirmDelete, setIsConfirmDelete] = useState(false);
  const [customer, setCustomer] = useState<ICustomer[]>([]);

  const getUsers = async () => {
    const users = await fetchUsers();
    setCustomer(users);
  };

  useEffect(() => {
    getUsers();
  });

  const handleOpenModal = (title: string, data?: ICustomer) => {
    setModalTitle(title);
    setCustomerData(data);
    setIsOpen(true);
    setIsConfirmDelete(false);
  };

  const handleOpenDeleteModal = (customer: ICustomer) => {
    setCustomerData(customer);
    setModalTitle(MODAL_TITLES.DELETE_CUSTOMER);
    setIsConfirmDelete(true);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setCustomerData(undefined);
  };

  const handleAddCustomer = () => {
    handleOpenModal(MODAL_TITLES.ADD_CUSTOMER);
  };

  const handleAction = (type: ActionType, id?: number) => {
    const customerAction = id && customer.find((item) => item.id === id);

    if (type === "Delete" && customerAction) {
      handleOpenDeleteModal(customerAction);
    } else if (customerAction) {
      handleOpenModal(
        type === "Edit"
          ? MODAL_TITLES.EDIT_CUSTOMER
          : MODAL_TITLES.VIEW_CUSTOMER,
        customerAction
      );
    }
  };

  const renderModalContent = () => {
    switch (modalTitle) {
      case MODAL_TITLES.DELETE_CUSTOMER:
        return (
          <Box textAlign="center">
            <Text>{MODAL_DESCRIPTION.CONFIRM_DELETE_DESCRIPTION}</Text>
          </Box>
        );

      case MODAL_TITLES.VIEW_CUSTOMER:
        return <CustomerView data={customerData!} />;

      default:
        return <CustomerForm data={customerData} />;
    }
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
          onClick={handleAddCustomer}
        />
      </Box>
      <Table columns={TableColumn} data={customer} action={handleAction} />
      <Modal
        isOpen={isOpen}
        onClose={handleCloseModal}
        title={modalTitle}
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
