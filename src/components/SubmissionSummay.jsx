import React from "react";

const SubmissionSummary = ({ data }) => {
  return (
    <div className="bg-gray-100 rounded-md shadow-md px-4 py-3 mt-6 w-full max-w-md md:max-w-lg lg:max-w-xl">
      <h2 className="text-xl font-bold mb-4">Submission Summary</h2>
      <ul className="list-disc pl-5">
        <li>Name: {data.name}</li>
        <li>Email: {data.email}</li>
        <li>Age: {data.age}</li>
        <li>Attending with guest: {data.withGuest ? "Yes" : "No"}</li>
        {data.withGuest && <li>Guest Name: {data.guestName}</li>}
      </ul>
    </div>
  );
};

export default SubmissionSummary;
