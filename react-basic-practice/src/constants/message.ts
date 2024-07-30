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
  CUSTOMER_DELETE_ERROR: {
    title: "Error deleted",
    description: "There was an error deleting the customer.",
    status: "error",
    ...COMMON_TOAST_OPTIONS,
  },
};

export const ERROR_MESSAGES = {
  UNKNOWN_ERROR: "An unknown error occurred",
};
