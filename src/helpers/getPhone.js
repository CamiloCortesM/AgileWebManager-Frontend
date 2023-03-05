export const getPhone = (phone) => {
  const digits = phone.split("");
  const lastFourDigits = digits.slice(-4);
  const asterisks = digits.slice(3, -4).map(() => "*");
  return asterisks.concat(lastFourDigits).join("");
};
