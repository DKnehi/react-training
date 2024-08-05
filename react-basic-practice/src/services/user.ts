import { API } from "@constants";
import { ICustomer, SortConfigType } from "@types";

/**
 * Fetches a list of users from the API, optionally sorted based on the provided sort configuration.
 * @param {SortConfigType} [sortConfig] - Optional sorting configuration with key and direction.
 * @returns {Promise<ICustomer[]>} - A promise that resolves to an array of customers.
 */
export const fetchUsers = async (sortConfig?: SortConfigType) => {
  try {
    const params = new URLSearchParams();
    if (sortConfig) {
      params.append("sortBy", sortConfig.key);
      params.append("order", sortConfig.direction);
    }

    const response = await fetch(
      `${API.BASE_URL}/${API.ENDPOINT_USERS}?${params.toString()}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return (await response.json()) as ICustomer[];
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

/**
 * Deletes a user by ID from the API.
 * @param {number} id - The ID of the user to delete.
 * @returns {Promise<void>} - A promise that resolves when the user has been deleted.
 */
export const deleteUser = async (id: number) => {
  try {
    const response = await fetch(
      `${API.BASE_URL}/${API.ENDPOINT_USERS}/${id}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to delete the user");
    }
    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

/**
 * Creates a new customer in the API.
 * @param {ICustomer} newCustomer - The customer data to create.
 * @returns {Promise<ICustomer>} - A promise that resolves to the newly created customer.
 */
export const createUser = async (newCustomer: ICustomer) => {
  try {
    const response = await fetch(`${API.BASE_URL}/${API.ENDPOINT_USERS}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCustomer),
    });
    if (!response.ok) throw new Error("Error adding customer");
    return response.json();
  } catch (error) {
    throw new Error("Error adding customer");
  }
};

/**
 * Updates an existing user in the API.
 * @param {number} id - The ID of the user to update.
 * @param {ICustomer} customer - The updated customer data.
 * @returns {Promise<void>} - A promise that resolves when the user has been updated.
 */
export const updateUser = async (
  id: number,
  customer: ICustomer
): Promise<void> => {
  const response = await fetch(`${API.BASE_URL}/${API.ENDPOINT_USERS}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  });
  if (!response.ok) {
    throw new Error("Failed to update user");
  }
};
