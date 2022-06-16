import { useState } from "react";

const Useform = (validate) => {
  const initialValues = {
    name: "",
    email: "",
    number: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    money: "",
    eMoneyNumber: "",
    eMoneyPin: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = () => {
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  return { formValues, formErrors, isSubmit, handleValueChange, handleSubmit };
};

export default Useform;
