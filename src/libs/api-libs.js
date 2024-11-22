import axios from "axios";

export const getResponse = async (resource) => {
  const response = await fetch(
    `${process.env.BASE_URL_API_RA_SABKHO}/${resource}`
  );
  const res = await response.json();
  return res;
};
