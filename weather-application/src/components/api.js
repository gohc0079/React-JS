import axios from "axios";
const KEY = "df7155e4ddmsh79bcf6dc80730b0p1b065ejsn87b33de44441";
export const headers = {
  headers: {
    "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
    "x-rapidapi-key": KEY,
  },
};
export default axios.create({
  baseURL: "",
});
