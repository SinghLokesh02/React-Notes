import React, { useState } from "react";

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [errorName, setErrorName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name.length < 3 || user.name.length > 20) {
      setErrorName("*Name should be between 3 to 20 characters");
    } else {
      setErrorName("");
      alert("Registration successful!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          React Registration Form
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={user.name}
              placeholder="Enter Name"
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errorName && <p className="text-sm text-red-600 mt-1">{errorName}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={user.email}
              placeholder="Enter Email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              autoComplete="off"
              value={user.password}
              placeholder="Enter Password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone:
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              value={user.phone}
              placeholder="Enter Phone"
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
