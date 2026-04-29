export const generateAmountOptions = (stop, start = 1, step = 1) => {
  return Array.from(
    { length: Math.ceil((stop - start + 1) / step) },
    (_, index) => {
      const amount = start + index * step;
      return (
        <option key={amount} value={amount}>
          {amount}
        </option>
      );
    },
  );
};
