import { API } from "@constants";
import { ICustomer } from "@types";

export const fetchUsers = async () => {
  try {
    const response = await fetch(`${API.BASE_URL}/${API.ENDPOINT_USERS}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
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

export const createUser = async (customer: ICustomer) => {
  try {
    const response = await fetch(`${API.BASE_URL}/${API.ENDPOINT_USERS}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customer),
    });

    if (!response.ok) {
      throw new Error("Failed to create the user");
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
