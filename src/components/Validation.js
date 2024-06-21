const validate = (formData) => {
  const errors = {};
  if (!formData.name) errors.name = "Name is required";
  if (!formData.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Email is invalid";
  }
  if (!formData.age || formData.age <= 0)
    errors.age = "Age must be a number greater than 0";
  if (formData.withGuest && !formData.guestName)
    errors.guestName = "Guest name is required if attending with a guest";
  return errors;
};

export default validate;
