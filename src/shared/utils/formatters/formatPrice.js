export const formatPrice = (price, locale = "en-US", currency = "USD") => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format((price / 100).toFixed(2));
};
