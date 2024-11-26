import React from 'react';

const Skillsbox = ({ value }) => {
  const allskills = value.map((skill) => {
    return (
      <div
        key={skill}
        className="px-3 py-2 mb-6 mr-2 font-centra text-[#f1f1f1] text-md bg-gray-400 rounded-[5px] font-bold tracking-wider cursor-default hover:bg-gray-600"
      >
        {skill}
      </div>
    );
  });
  return <>{allskills}</>;
};

export default Skillsbox;
