import React from 'react';

const BulletPoints = ({ title, values, className}) => {
  return (
    <div className={className}>

      <h1 className="font-medium text-5xl tracking-wider mb-1 md:text-xl">
        {title}
      </h1>

      <ul className="text-3xl list-inside list-disc pl-2 font-light md:text-base">
        {values.map((item, index) => (
          <li key={index}> 
            {item}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default BulletPoints;
