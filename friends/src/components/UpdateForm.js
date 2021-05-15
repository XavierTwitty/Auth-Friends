import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export default function UpdateForm() {
  const [form, setForm] = useState({ name: "", age: "", email: "" });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    axiosWithAuth().post();
  };
  return (
    <div>
      <form>
        <label>Name: </label>
        <input name="name" onChange={handleChange} value={form.name} />
        <label> Age: </label>
        <input name="age" onChange={handleChange} value={form.name} />
        <label> Email: </label>
        <input name="email" onChange={handleChange} value={form.name} />
        <button type="submit"> save </button>
        <button> delete </button>
      </form>
    </div>
  );
}
