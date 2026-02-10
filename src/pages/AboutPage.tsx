import React, { useEffect } from "react";

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          About CodeWithZee
        </h1>
        <p className="text-xl text-gray-600">Coming soon...</p>
      </div>
    </div>
  );
};

export default AboutPage;
