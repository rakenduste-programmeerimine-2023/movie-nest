"use client";

const ContactForm = () => {
  return (
    <div className="page create w-1/2">
      <h1 className="text-xl self-start pb-8">Contact us</h1>
      <form className="flex flex-col gap-4">
        <label htmlFor="name">Name:</label>
        <input
          className="text-black border border-gray-600 rounded"
          type="text"
          id="name"
        />
        <label htmlFor="email">Email:</label>
        <input
          className="text-black border border-gray-600 rounded"
          type="email"
          id="email"
        />
        <label htmlFor="message">Message:</label>
        <textarea
          className="text-black border border-gray-600 rounded"
          id="message"
          cols="30"
          rows="10"
        ></textarea>
      </form>
    </div>
  );
};

export default ContactForm;
