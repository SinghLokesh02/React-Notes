import React from "react";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Build responsive and modern websites tailored to your business needs.",
      icon: "🌐",
    },
    {
      title: "UI/UX Design",
      description:
        "Design intuitive and user-friendly interfaces for web and mobile applications.",
      icon: "🎨",
    },
    {
      title: "JavaScript Development",
      description:
        "Expertise in creating dynamic and interactive web applications using JavaScript frameworks.",
      icon: "📜",
    },
    {
      title: "API Integration",
      description:
        "Seamlessly integrate third-party APIs to enhance your application's functionality.",
      icon: "🔌",
    },
    {
      title: "Performance Optimization",
      description:
        "Optimize websites and applications to deliver fast and smooth user experiences.",
      icon: "⚡",
    },
    {
      title: "Technical Writing",
      description:
        "Craft clear and concise documentation, tutorials, and technical content.",
      icon: "📝",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            We offer a wide range of services to cater to your technical and
            creative needs.
          </p>
        </section>

        {/* Service Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-6 text-center hover:scale-105 transform transition duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h2 className="text-xl font-bold mb-2">{service.title}</h2>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Services;
