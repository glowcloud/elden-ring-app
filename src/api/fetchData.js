const API_URL = "https://eldenring.fanapis.com/api/";

export const fetchData = async (resource, id) => {
  const url = API_URL + resource;
  if (id) url += `/${id}`;

  const response = await fetch(url);
  const json = await response.json();
  return json.data;
};
