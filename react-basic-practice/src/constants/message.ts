import { UseToastOptions } from "@chakra-ui/react";

const TOAST_DURATION = 5000;

const COMMON_TOAST_OPTIONS: Partial<UseToastOptions> = {
  duration: TOAST_DURATION,
  isClosable: true,
};

export const TOAST_MESSAGES: Record<string, UseToastOptions> = {
  CUSTOMER_DELETED: {
    title: "Customer deleted.",
    description: "The customer has been deleted successfully.",
    status: "success",
    ...COMMON_TOAST_OPTIONS,
  },
  CUSTOMER_CREATED: {
    title: "Success",
    description: "Customer has been added successfully.",
    status: "success",
    ...COMMON_TOAST_OPTIONS,
  },
  CUSTOMER_UPDATED: {
    title: "Customer updated.",
    description: "The customer has been updated successfully.",
    status: "success",
    ...COMMON_TOAST_OPTIONS,
  },
};

export const ERROR_MESSAGES = {
  UNKNOWN_ERROR: "An unknown error occurred",
  CUSTOMER_UPDATE_ERROR: "There was an error updating the customer.",
  CUSTOMER_CREATE_ERROR: "Failed to add customer. Please try again.",
  CUSTOMER_DELETE_ERROR: "There was an error deleting the customer.",
};
