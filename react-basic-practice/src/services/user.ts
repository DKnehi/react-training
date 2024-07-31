import { API } from "@constants";
import { ICustomer, SortConfigType } from "@types";

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
