import React from "react";
import {Link} from "react-router-dom";
const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Discover my journey, explore my projects, and get in touch to
            collaborate!
          </p>
        </section>

        {/* Gallery Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvamVjdHxlbnwwfHwwfHx8MA%3D%3D"
              alt="Placeholder 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">Project 1</h2>
              <p className="text-sm text-gray-400">
                A brief description of Project 1 goes here.
              </p>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://images.pexels.com/photos/5239879/pexels-photo-5239879.jpeg?cs=srgb&dl=pexels-karolina-grabowska-5239879.jpg&fm=jpg"
              alt="Placeholder 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">Project 2</h2>
              <p className="text-sm text-gray-400">
                A brief description of Project 2 goes here.
              </p>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://img.freepik.com/free-photo/digital-visa-application-tablet-travel-agent-asking-customers-fill-online-permit-go-abroad-vacation-holiday_662251-2185.jpg"
              alt="Placeholder 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">Project 3</h2>
              <p className="text-sm text-gray-400">
                A brief description of Project 3 goes here.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-gray-300 mb-6">
            If you are looking for a passionate and skilled developer, feel free
            to reach out!
          </p>
          <Link className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-lg transition duration-300" to="/contact">
            Contact Me
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Home;
