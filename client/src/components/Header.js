import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 p-4 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">My Landing Page</h1>
      <nav>
        <a href="#features" className="ml-4">Features</a>
        <a href="#cta" className="ml-4">Sign Up</a>
      </nav>
    </header>
  );
};

export default Header;

