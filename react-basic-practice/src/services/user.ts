import { API } from "@constants";

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
