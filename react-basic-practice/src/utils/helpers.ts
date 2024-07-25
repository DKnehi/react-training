export const extractNumericValue = (value: string): number => {
  return parseFloat(value.replace(/[^0-9.-]+/g, ""));
};

