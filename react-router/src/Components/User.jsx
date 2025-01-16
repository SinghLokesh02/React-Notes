import React from "react";
import { useParams } from "react-router-dom";

// User Component
const User = () => {
  const { name } = useParams();
  return (
    <div className="text-center py-8">
      <h1 className="text-4xl font-bold text-gray-800">Welcome, {name}!</h1>
      <p className="text-lg text-gray-600 mt-4">
        This is your personalized page.
      </p>
    </div>
  );
};

export default User;
