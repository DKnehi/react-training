export const extractNumericValue = (value: string): number => {
  return parseFloat(value?.replace(/[^0-9.-]/g, "") || "0");
};

export const capitalizeFirstLetter = (text: string): string => {
  if (text.length === 0) return text;
  return text.charAt(0).toUpperCase() + text.slice(1);
};
