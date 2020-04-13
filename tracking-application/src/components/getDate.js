export const getDateFromString = (record_date) => {
  let date = new Date(record_date);
  const timeStr = `${date.getDate()} ${date.toLocaleString("default", {
    month: "short",
  })} ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;

  return timeStr;
};
