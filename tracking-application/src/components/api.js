import axios from "axios";
const KEY = "ccfb007929msh6d298a8b0ccee59p11d9e7jsne32da6975ce0";
export const headers = {
  headers: {
    "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
    "x-rapidapi-key": KEY,
  },
};
export default axios.create({
  baseURL: "",
});
