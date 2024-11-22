import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className="items-center justify-between text-color-dark py-2 ">
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
        <li>
          <Link
            href="/"
            className=" py-1 px-3 hover:text-color-secondary hover:border-2 hover:rounded-lg hover:border-color-dark"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/guru"
            className=" py-1 px-3 hover:text-color-secondary hover:border-2 hover:rounded-lg hover:border-color-dark"
          >
            Guru
          </Link>
        </li>
        <li>
          <Link
            href="/karya"
            className=" py-1 px-3 hover:text-color-secondary hover:border-2 hover:rounded-lg hover:border-color-dark"
          >
            Karya
          </Link>
        </li>
        <li>
          <Link
            href="/news"
            className=" py-1 px-3 hover:text-color-secondary hover:border-2 hover:rounded-lg hover:border-color-dark"
          >
            News
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className=" py-1 px-3 hover:text-color-secondary hover:border-2 hover:rounded-lg hover:border-color-dark"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
