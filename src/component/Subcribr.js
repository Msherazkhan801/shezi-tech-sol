// src/components/SubscriptionForm.js
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const SubscriptionForm = () => {
  const [state, handleSubmit] = useForm("manokkpp"); // Use your form ID

  if (state.succeeded) {
    return (
      <p className="text-green-400 text-sm mt-2">
        Thank you for subscribing!
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full">
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Enter Your Email Address..."
        required
        className="w-full px-4 py-2 rounded-l bg-[#2c2f36] text-sm text-gray-200 focus:outline-none"
      />
      <button
        type="submit"
        disabled={state.submitting}
        className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-4 rounded-r"
      >
        SUBSCRIBE
      </button>
      <ValidationError prefix="Email" field="email" errors={state.errors} />
    </form>
  );
};

export default SubscriptionForm;
