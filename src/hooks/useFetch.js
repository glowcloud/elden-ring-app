import { useEffect, useState } from "react";
import { API_URL, BUILDS_API_URL } from "../api/apiRoutes";
import { useAuthContext } from "./useAuthContext";

const paginate = (array, pageSize, currentPage) => {
  if (array)
    return array.slice(currentPage * pageSize, (currentPage + 1) * pageSize);
  else return array;
};

const useFetch = (resource, id = null, page = -1) => {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuthContext();

  useEffect(() => {
    setIsLoading(true);
    if (resource.includes("builds")) {
      let url = BUILDS_API_URL + resource;
      if (id) {
        url += `${id}`;
      }
      if (resource.includes("owner")) {
        if (!user) setData(false);
        else {
          fetch(url, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              setData(data);
              setIsLoading(false);
            });
        }
      } else {
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            if (!id) {
              setCount(data ? data.length : 0);
              setData(paginate(data, 20, page));
            } else {
              setData(data);
            }
            setIsLoading(false);
          });
      }
    } else {
      fetch(API_URL + resource)
        .then((res) => res.json())
        .then((data) => {
          setData(data.data);
          setCount(data.total);
          setIsLoading(false);
        });
    }
  }, [resource, id]);

  return { data, count, isLoading };
};

export default useFetch;
