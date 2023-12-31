"use client";

import React, { useState } from "react";
import supabase from "../app/config/supabaseClient";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formError, setFormError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setFormError("Please fill in all the fields");
      return;
    }

    const { data, error } = await supabase
      .from("ContactUs")
      .insert([{ name: name, email: email, message: message }])
      .select();

    if (error) {
      console.log(error);
      setFormError("Error in processing request");
      setSuccessMessage(null);
    }

    if (data) {
      console.log(data);
      setFormError(null);
      setSuccessMessage(
        "Successfully sent message. We will get back to you as soon as possible."
      );
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="page create w-1/2">
      <h1 className="text-xl self-start pb-8">Contact us</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label htmlFor="name">Name:</label>
        <input
          className="text-black border border-gray-600 rounded"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="off"
        />
        <label htmlFor="email">Email:</label>
        <input
          className="text-black border border-gray-600 rounded"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"
        />
        <label htmlFor="message">Message:</label>
        <textarea
          className="text-black border border-gray-600 rounded"
          id="message"
          cols="30"
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="self-start border border-gray-600 rounded py-2 px-4"
          id="submit-button"
        >
          Submit
        </button>
        {successMessage && <p className="success">{successMessage}</p>}
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
