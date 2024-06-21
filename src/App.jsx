import InputField from "./components/InputField";
import CheckboxField from "./components/CheckboxField";
import GuestInputField from "./components/GuestInputField";
import SubmissionSummary from "./components/SubmissionSummay";
import validate from "./components/Validation";
import "./index.css";
import { useState } from "react";

const EventRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    withGuest: false,
    guestName: "",
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formData);
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      setSubmittedData(formData);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500 min-h-screen px-4">
      <div className="bg-white w-full max-w-md md:max-w-lg lg:max-w-xl py-6 px-4 md:px-6 lg:px-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Event Registration Form
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4 items-center"
        >
          <InputField
            label="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
          />
          <InputField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <InputField
            label="Age"
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            error={errors.age}
          />
          <CheckboxField
            label="Are you attending with a guest?"
            name="withGuest"
            checked={formData.withGuest}
            onChange={handleChange}
          />
          {formData.withGuest && (
            <GuestInputField
              label="Guest Name"
              name="guestName"
              value={formData.guestName}
              onChange={handleChange}
              error={errors.guestName}
            />
          )}
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>

        {submittedData && <SubmissionSummary data={submittedData} />}
      </div>
    </div>
  );
};

export default EventRegistrationForm;
