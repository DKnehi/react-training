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
  const [isLoading, setIsLoading] = useState(false);
  const [customers, setCustomers] = useState<ICustomer[]>([]);
  const [searchValue, setSearchValue] = useState("");
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

    if (customerAction) {
      handleOpenModal(
        type === "Edit"
          ? MODAL_TITLES.EDIT_CUSTOMER
          : type === "Delete"
            ? MODAL_TITLES.DELETE_CUSTOMER
            : MODAL_TITLES.VIEW_CUSTOMER,
        customerAction
      );
    }
  };

  const handleDeleteCustomer = async () => {
    setIsLoading(true);

    if (modalTitle === MODAL_TITLES.DELETE_CUSTOMER && customerData) {
      try {
        await deleteUser(customerData.id);
        setCustomers((prevCustomers) =>
          prevCustomers.filter((customer) => customer.id !== customerData.id)
        );
        toast(TOAST_MESSAGES.CUSTOMER_DELETED);
      } catch (error) {
        toast(TOAST_MESSAGES.CUSTOMER_DELETE_ERROR);
      }
    }
    setIsLoading(false);
    handleCloseModal();
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

  const filteredCustomers = customers.filter((customer) => {
    const searchLower = searchValue.toLowerCase();
    return (
      customer.name.toLowerCase().includes(searchLower) ||
      customer.status.toLowerCase().includes(searchLower)
    );
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
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
        <Search value={searchValue} onChange={handleSearchChange} />
        <Button
          label="+ Add Customer"
          variant="shadow"
          onClick={handleAddCustomer}
        />
      </Box>
      <Table
        columns={TableColumn}
        data={filteredCustomers}
        action={handleAction}
      />
      <Modal
        isOpen={isOpen}
        onClose={handleCloseModal}
        title={modalTitle}
        onSubmit={handleDeleteCustomer}
        isLoading={isLoading}
      >
        {renderModalContent()}
      </Modal>
    </Box>
  );
};

export default Dashboard;
