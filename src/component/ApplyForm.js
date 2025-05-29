import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const ApplyForm = ({
  phone = false,
//   resume = false,
  subscription = false,
  lookingFor = false,
  business = false,
}) => {
  const [state, handleSubmit] = useForm("manokkpp");

  // State for all fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    portfolio: "",
    salary: "",
    availability: "",
    location: "",
    upload: null,
    lookingFor: "",
    businessProject: "",
    message: "",
    subscribe: "",
  });

  // Handle input change for text, select, radio
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  if (state.succeeded) {
    return (
      <h3 className="text-orange-500 my-5 py-3 text-center font-semibold">
        Thanks for contacting us! We will get back to you soon.
      </h3>
    );
  }

  return (
    <form
      className="w-full max-w-4xl mx-auto"
      onSubmit={handleSubmit}
      noValidate
    >
      {/* Name */}
      <div className="w-full  px-3 mb-6 md:mb-0">
        <label
          htmlFor="name"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your full name"
          required
          value={formData.name}
          onChange={handleChange}
          className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      {/* Email */}
      <div className="w-full  px-3">
        <label
          htmlFor="email"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email"
          required
          value={formData.email}
          onChange={handleChange}
          className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      {/* Phone */}
      {phone && (
        <div className="px-3 mb-6">
          <label
            htmlFor="phone"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
            className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        </div>
      )}

      {/* Looking For */}
      {lookingFor && (
        <div className="px-3 mb-6">
          <label
            htmlFor="lookingFor"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            What are you looking for? *
          </label>
          <select
            id="lookingFor"
            name="lookingFor"
            required
            value={formData.lookingFor}
            onChange={handleChange}
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          >
            <option value="" disabled>
              Select an option
            </option>
            <option>MERN Stack</option>
            <option>MEAN Stack</option>
            <option>WordPress</option>
            <option>React Js</option>
            <option>Angular</option>
            <option>Angular + Node</option>
            <option>.Net</option>
            <option>Node Js</option>
            <option>Front End</option>
            <option>Back End</option>
            <option>PHP/Laravel</option>
            <option>Shopify</option>
            <option>Vue.js</option>
          </select>
          <ValidationError prefix="LookingFor" field="lookingFor" errors={state.errors} />
        </div>
      )}

      {/* Business Project */}
      {business && (
        <div className="px-3 mb-6">
          <label
            htmlFor="businessProject"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Your Business Project *
          </label>
          <select
            id="businessProject"
            name="businessProject"
            required
            value={formData.businessProject}
            onChange={handleChange}
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          >
            <option value="" disabled>
              Select an option
            </option>
            <option>Web development</option>
            <option>App development</option>
            <option>Others</option>
          </select>
          <ValidationError prefix="BusinessProject" field="businessProject" errors={state.errors} />
        </div>
      )}

      {/* Message */}
      <div className="px-3 mb-6">
        <label
          htmlFor="message"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Write your message here..."
          required
          value={formData.message}
          onChange={handleChange}
          className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      {/* Subscription */}
      {subscription && (
        <div className="px-3 mb-6">
          <p className="text-gray-700 mb-2">
            Can we stay in touch? We'll drop industry insight and relevant news straight to your inbox. No spam!
          </p>
          <div className="flex items-center space-x-6">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="subscribe"
                value="yes"
                checked={formData.subscribe === "yes"}
                onChange={handleChange}
                className="form-radio text-blue-600"
              />
              <span className="ml-2 text-gray-700">Yes, please</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="subscribe"
                value="no"
                checked={formData.subscribe === "no"}
                onChange={handleChange}
                className="form-radio text-blue-600"
              />
              <span className="ml-2 text-gray-700">No Thanks</span>
            </label>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <div className="px-3 mb-6 text-center">
        <button
          type="submit"
          disabled={state.submitting}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded shadow transition duration-300 disabled:opacity-50"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ApplyForm;
