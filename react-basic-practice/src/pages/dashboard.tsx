import React, { useState, useEffect } from "react";
import { Box, Text, useToast } from "@chakra-ui/react";
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
import { MODAL_TITLES, MODAL_DESCRIPTION, TOAST_MESSAGES } from "@constants";
import { fetchUsers, deleteUser } from "@services";

const Dashboard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Add Customer");
  const [customerData, setCustomerData] = useState<ICustomer>();
  const [isConfirmDelete, setIsConfirmDelete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [customers, setCustomers] = useState<ICustomer[]>([]);
  const toast = useToast();

  const getUsers = async () => {
    const users = await fetchUsers();
    setCustomers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

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
    setIsLoading(false);
  };

  const handleAddCustomer = () => {
    handleOpenModal(MODAL_TITLES.ADD_CUSTOMER);
  };

  const handleAction = (type: ActionType, id?: number) => {
    const customerAction =
      Array.isArray(customers) && customers.length > 0 && id
        ? customers.find((item) => item.id === id)
        : null;

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

  const handleActionSubmit = async () => {
    if (modalTitle === MODAL_TITLES.DELETE_CUSTOMER && customerData) {
      setIsLoading(true);
      try {
        await deleteUser(customerData.id);
        setCustomers((prevCustomers) =>
          prevCustomers.filter((customer) => customer.id !== customerData.id)
        );
        handleCloseModal();
        toast(TOAST_MESSAGES.CUSTOMER_DELETED);
      } catch (error) {
        console.error("Error deleting customer:", error);
        toast(TOAST_MESSAGES.CUSTOMER_DELETE_ERROR);
        setIsLoading(false);
      }
    } else {
      handleCloseModal();
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
      <Table columns={TableColumn} data={customers} action={handleAction} />
      <Modal
        isOpen={isOpen}
        onClose={handleCloseModal}
        title={modalTitle}
        onAction={handleActionSubmit}
        isLoading={isLoading}
      >
        {renderModalContent()}
      </Modal>
    </Box>
  );
};

export default Dashboard;
