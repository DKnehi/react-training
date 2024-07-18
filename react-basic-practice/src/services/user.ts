import { API } from "@constants";

export const fetchUsers = async () => {
  const response = await fetch(`${API.BASE_URL}/${API.ENDPOINT_USERS}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
