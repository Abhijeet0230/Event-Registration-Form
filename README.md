# Basic Dynamic Form with Conditional Fields

## Objective
Build a form with dynamic fields and simple validation for an event registration form.

## Form Type
Event Registration Form

## Features
- Dynamic fields based on user input.
- Conditional logic to show/hide fields.
- Form validation for required fields.

## Technologies
- React
- React Hooks (useState, useEffect)
- Custom hooks for form validation and management

## How to Run
1. Clone the repository.
2. Install dependencies with npm install.
3. Run the project with npm start.
4. Access the form in your browser at http://localhost:3000.

## Tasks
1. **Form Fields:**
   - Name (Text)
   - Email (Email)
   - Age (Number)
   - Are you attending with a guest? (Yes/No)
   - Guest Name (Text, visible only if attending with a guest)

2. **Conditional Logic:**
   - Show the "Guest Name" field only if the "Are you attending with a guest?" field is answered with "Yes".

3. **Validation:**
   - Name: Required
   - Email: Required and must be a valid email format
   - Age: Required and must be a number greater than 0
   - Guest Name: Required if attending with a guest

4. **Submission:**
   - On form submission, display a summary of the entered data.

## Requirements
- Use React functional components and hooks (useState, useEffect).
- Implement custom hooks for form validation and management.
- Ensure a clean and user-friendly interface with clear error messages.

## Deliverables
- A URL hosted on a free hosting site (e.g., Netlify, Vercel) where we can interact with your form.
- A link to a public repository (e.g., GitHub) with your source code.
