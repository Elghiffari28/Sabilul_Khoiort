import React from "react";
import Link from "next/link";
import Navigation from "./Navigation";

const Navbar = () => {
  return (
    <header>
      <div className="bg-color-accent text-2xl flex justify-between items-center px-4 py-3">
        <Link href="/" className="font-bold text-color-dark">
          RA SABILUL KHOIROT
        </Link>
        <div>
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
