import React from "react";

const Header = ({ title, desc }) => {
  return (
    <header className="flex justify-center p-4 w-full">
      <div className="max-w-xl bg-color-dark bg-opacity-10 rounded-lg shadow-lg p-4">
        <h1 className="font-bold text-3xl text-center">{title}</h1>
        <div className="border-b-4 border-color-accent p-2 w-1/2 mx-auto"></div>
        <p className="font-medium text-xl text-center mt-2">{desc}</p>
      </div>
    </header>
  );
};

export default Header;
