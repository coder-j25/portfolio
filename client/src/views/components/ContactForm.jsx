import React, { useRef } from "react";
import emailjs from "@emailjs/browser"

const ContactForm = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qpnauko",
        "template_qx0kpmu",
        form.current,
        "Rrxe52yg66_0uVcrN"
      )
      .then(
        (result) => {
          alert("Email sent successfully!");
          console.log(result.text);
        },
        (error) => {
          alert("Failed to send email. Try again!");
          console.log(error.text);
        }
      );

    e.target.reset();
  }

  return (
    <>
      <div className="pb-8 pt-9 bg-gray-300">
        <div className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-md">
          <form ref={form} onSubmit={sendEmail}>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-semibold text-black"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500"
              required
            />
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-semibold text-black pt-4"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500"
              required
            />
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-semibold text-black pt-4"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Leave a message..."
              required
            />
            <button
              type="submit"
              className="bg-white text-black border p-2 rounded font-semibold mt-3 w-full"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ContactForm