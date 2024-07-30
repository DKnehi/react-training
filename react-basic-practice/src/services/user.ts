import { API } from "@constants";
import { ICustomer } from "@types";

export const fetchUsers = async (
  sortConfig: { key: keyof ICustomer; direction: "asc" | "desc" } | null = null
) => {
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
