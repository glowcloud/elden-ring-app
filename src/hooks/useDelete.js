import { useState, useCallback } from "react";
import { BUILDS_API_URL } from "../api/apiRoutes";

const useDelete = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = useCallback(async (id, user) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${BUILDS_API_URL}builds/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }

    setIsLoading(false);
  });

  return { handleDelete, isLoading, error };
};

export default useDelete;
