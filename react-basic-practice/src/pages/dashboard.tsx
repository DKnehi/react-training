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
import {
  MODAL_TITLES,
  MODAL_DESCRIPTION,
  TOAST_MESSAGES,
  ERROR_MESSAGES,
} from "@constants";
import { fetchUsers, deleteUser, createUser, updateUser } from "@services";

const Dashboard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Add Customer");
  const [customerData, setCustomerData] = useState<ICustomer>();
  const [isLoading, setIsLoading] = useState(false);
  const [customers, setCustomers] = useState<ICustomer[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const toast = useToast();

  /**
   * Fetches the list of users from the API and updates the customers state.
   * @returns {Promise<void>} A promise that resolves when the data has been fetched and state has been updated.
   */
  const getUsers = async () => {
    const users = await fetchUsers();
    setCustomers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  /**
   * Opens the modal with the given title and optionally sets the customer data.
   * @param {string} title - The title of the modal.
   * @param {ICustomer} [data] - Optional data of the customer to be used in the modal.
   */
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

  /**
   * Handles the action based on the type and id, such as Edit, Delete, or View.
   * @param {ActionType} type - The type of action to be performed.
   * @param {number} [id] - The id of the customer on which the action is performed.
   */
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

  /**
   * Deletes the selected customer.
   * @returns {Promise<void>} A promise that resolves when the customer has been deleted.
   */
  const handleDeleteCustomer = async () => {
    setIsLoading(true);

    if (modalTitle === MODAL_TITLES.DELETE_CUSTOMER && customerData) {
      try {
        await deleteUser(customerData.id!);
        setCustomers((prevCustomers) =>
          prevCustomers.filter((customer) => customer.id !== customerData.id)
        );
        toast(TOAST_MESSAGES.CUSTOMER_DELETED);
      } catch (error) {
        const errorMessage =
          error instanceof Error
            ? error.message
            : ERROR_MESSAGES.CUSTOMER_DELETE_ERROR;
        toast({
          status: "error",
          title: "Error delete custome",
          description: errorMessage,
          duration: 5000,
          isClosable: true,
        });
      }
    }
    setIsLoading(false);
    handleCloseModal();
  };

  /**
   * Creates a new customer and adds it to the list.
   * @param {Omit<ICustomer, "id">} newCustomer - The data of the new customer.
   * @returns {Promise<void>} A promise that resolves when the customer has been created.
   */
  const handleCreateCustomer = async (newCustomer: Omit<ICustomer, "id">) => {
    setIsLoading(true);

    try {
      const createdCustomer = await createUser(newCustomer);
      setCustomers((prevCustomers) => [...prevCustomers, createdCustomer]);
      toast(TOAST_MESSAGES.CUSTOMER_CREATED);
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : ERROR_MESSAGES.CUSTOMER_CREATE_ERROR;
      toast({
        status: "error",
        title: "Error create custome",
        description: errorMessage,
        duration: 5000,
        isClosable: true,
      });
    }

    setIsLoading(false);
    handleCloseModal();
  };

  /**
   * Updates the selected customer.
   * @param {ICustomer} customer - The data of the customer to be updated.
   * @returns {Promise<void>} A promise that resolves when the customer has been updated.
   */
  const handleUpdateCustomer = async (customer: ICustomer) => {
    setIsLoading(true);

    try {
      await updateUser(customer.id!, customer);
      setCustomers((previousCustomers) =>
        previousCustomers.map((existingCustomer) =>
          existingCustomer.id === customer.id ? customer : existingCustomer
        )
      );
      toast(TOAST_MESSAGES.CUSTOMER_UPDATED);
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : ERROR_MESSAGES.CUSTOMER_UPDATE_ERROR;
      toast({
        status: "error",
        title: "Error updating custome",
        description: errorMessage,
        duration: 5000,
        isClosable: true,
      });
    }

    setIsLoading(false);
    handleCloseModal();
  };

  /**
   * Renders the content of the modal based on the modal title.
   * @returns {JSX.Element} The rendered modal content.
   */
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
        return (
          <CustomerForm
            data={customerData}
            onSubmit={
              customerData ? handleUpdateCustomer : handleCreateCustomer
            }
            isLoading={isLoading}
          />
        );
    }
  };

  /**
   * Filters the list of customers based on the search value.
   * @returns {ICustomer[]} The filtered list of customers.
   */
  const filteredCustomers = customers.filter((customer) => {
    const searchLower = searchValue.toLowerCase();
    return (
      customer.name.toLowerCase().includes(searchLower) ||
      customer.status.toLowerCase().includes(searchLower)
    );
  });

  /**
   * Handles the change in search input value.
   * @param {React.ChangeEvent<HTMLInputElement>} e - The change event of the input field.
   */
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
