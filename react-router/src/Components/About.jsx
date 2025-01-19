import React, { useEffect, useState } from 'react';

const About = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const URL = "https://api.github.com/users/SinghLokesh02";
    const data = await fetch(URL);
    const response = await data.json();
    setUser(response);
  }

  return (
    <div className="text-center py-8 min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <h1 className="text-4xl font-bold text-gray-800">About Me</h1>
      {user && (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-4">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img className="h-48 w-full object-cover md:h-full md:w-48" src={user.avatar_url} alt="User Avatar" style={{objectPosition:"top center"}}/>
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{user.login}</div>
              <p className="block mt-1 text-lg leading-tight font-medium text-black">{user.name}</p>
              <p className="mt-2 text-gray-500">{user.bio}</p>
              <div className="mt-4">
                <p className="text-gray-500"><span className="font-semibold">Followers:</span> {user.followers}</p>
                <p className="text-gray-500"><span className="font-semibold">Following:</span> {user.following}</p>
                <p className="text-gray-500"><span className="font-semibold">Public Repos:</span> {user.public_repos}</p>
                <p className="text-gray-500"><span className="font-semibold">Location:</span> {user.location}</p>
                <p className="text-gray-500"><span className="font-semibold">Blog:</span> <a href={user.blog} target="_blank" rel="noopener noreferrer">{user.blog}</a></p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
