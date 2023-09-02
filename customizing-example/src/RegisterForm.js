import { useState } from "react";

function RegisterForm() {
  const [form, setForm] = useState({
    firstName: "Rishav",
    lastName: "kumar",
    email: "rishavkumar@gmail.com",
    password: ""
  });

  return (
    <>
      <label htmlFor="firstName">
        First name:
        <input
          type="text"
          value={form.firstName}
          onChange={(e) => {
            setForm({
              ...form,
              firstName: e.target.value,
            });
          }}
        />
      </label>
      <label htmlFor="lastName">
        Last name:
        <input
          type="text"
          value={form.lastName}
          onChange={(e) => {
            setForm({
              ...form,
              lastName: e.target.value,
            });
          }}
        />
      </label>
      <label htmlFor="email">
        Email Id:
        <input
          type="email"
          value={form.email}
          onChange={(e) => {
            setForm({
              ...form,
              email: e.target.value,
            });
          }}
        />
      </label>
      <label htmlFor="password">
        Password:
        <input
          type="password"
          value={form.password}
          onChange={(e) => {
            setForm({
              ...form,
              password: e.target.value,
            });
          }}
        />
      </label>
      <p>
        {form.firstName}{''}
        {form.lastName}{''}
        ({form.email})
      </p>
    </>
  );
}

export default RegisterForm;
