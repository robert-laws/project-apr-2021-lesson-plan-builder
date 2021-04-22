// capitalize first letter of string
export const capitalizeFirstWord = (string) => {
  let newString = string.trim().replace(/^\w/, (c) => c.toUpperCase());
  return newString;
};
