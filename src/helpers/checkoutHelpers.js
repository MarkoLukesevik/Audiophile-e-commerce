export const calculateBasketPrice = (array) => {
  let basketPrice = 0;
  array.forEach((product) => {
    basketPrice += product.price * product.quantity;
  });
  return basketPrice;
};

export const shippingCost = (array) => {
  return array.length !== 0 ? 50 : null;
};

export const calculateVat = (array) => {
  return calculateBasketPrice(array) / 5;
};

export const calculateGrandTotal = (array) => {
  return (
    calculateBasketPrice(array) + shippingCost(array) + calculateVat(array)
  );
};

// Form validation rules!!
export const validate = (values) => {
  const errors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Wrong format";
  }
  if (!values.number) {
    errors.number = "Phone Number is required";
  }
  if (!values.address) {
    errors.address = "Address is required";
  }
  if (!values.zip) {
    errors.zip = "Zip is required";
  }
  if (!values.city) {
    errors.city = "City is required";
  }
  if (!values.country) {
    errors.country = "Country is required";
  }
  if (!values.money) {
    errors.money = "Payment Method is required";
  }
  if (values.money === "e-money") {
    if (!values.eMoneyNumber) {
      errors.eMoneyNumber = "e-Money-Number is required";
    }
    if (!values.eMoneyPin) {
      errors.eMoneyPin = "e-Money-Pin is required";
    }
  }

  return errors;
};
