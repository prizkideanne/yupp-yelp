import axios from "axios";

// const baseURL = `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3`;
const baseURL = `https://api.yelp.com/v3/businesses`;

const api = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_YELP_API_KEY}`,
    "Content-type": "application/json",
  },
});

export default api;
