export const getDate = (date) => {
  const newdate = new Date(date).toISOString().split(".")[0];
  const StringDate = newdate.split("T");
  return `${StringDate[0]}  ${StringDate[1]}`;
};
