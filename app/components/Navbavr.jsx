"use client";

import React from "react";
import { Menu, X, Search, Bell, UserRound } from "lucide-react";

const menuItems = [
  {
    name: "Launches",
    href: "#",
  },
  {
    name: "Products",
    href: "#",
  },
  {
    name: "News",
    href: "#",
  },
  {
    name: "Community",
    href: "#",
  },
  {
    name: "Advertise",
    href: "#",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative w-full bg-white border-b py-1">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span className="font-bold bg-orange-500 text-white rounded-full flex justify-center align-middle py-1 px-3 text-xl">
            P
          </span>
          <div>
            <div className="flex align-middle bg-slate-100 rounded-full py-1 px-5 w-[250px] ml-8 max-sm:ml-2">
              <Search size={18} className="mt-1 mr-2 text-slate-400" />
              <input
                type="text"
                placeholder="Search (ctrl + k)"
                className="outline-0 bg-slate-100 rounded-full placeholder-sm w-[150px]"
              />
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-sm font-normal text-slate-800 hover:text-orange-500"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:block">
          <div className="flex justify-center align-middle">
            <a
              href=""
              className="bg-orange-50 text-orange-500 rounded px-4 py-2"
            >
              Submit
            </a>
            <button className="mx-3 text-slate-500">
              <Bell size={20} />
            </button>
            <div className="relative group ">
              <a
                href="#"
                className="flex justify-center items-center text-slate-500 mt-2"
              >
                <UserRound size={20} />
              </a>
              <div className="absolute -left-56 sm:-left-12 shadow-lg hidden group-hover:block mt-2 border rounded w-full sm:w-[130px] shadow-md bg-white">
                <div className="p-2 hover:bg-slate-100 rounded">
                  <a href="#" className="text-sm text-slate-500">
                    Profile
                  </a>
                </div>
                <div className="p-2 hover:bg-slate-100 rounded">
                  <a href="#" className="text-sm text-slate-500">
                    My Products
                  </a>
                </div>
                <div className="p-2 hover:bg-slate-100 rounded">
                  <a href="#" className="text-sm text-slate-500">
                    Settings
                  </a>
                </div>
                <div className="p-2 hover:bg-slate-100 rounded">
                  <a href="#" className="text-sm text-slate-500">
                    API Dashboard
                  </a>
                </div>
                <div className="p-2 hover:bg-slate-100 rounded">
                  <a href="#" className="text-sm text-slate-500">
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span className="font-bold bg-orange-500 text-white rounded-full flex justify-center align-middle py-1 px-3 text-xl">
                      P
                    </span>
                  </div>

                  <div className="flex justify-center align-middle">
                    <a
                      href=""
                      className="bg-orange-50 text-orange-500 rounded px-4 py-2"
                    >
                      Submit
                    </a>
                    <button className="mx-3 text-slate-500">
                      <Bell size={20} />
                    </button>
                    <div className="relative group ">
                      <a
                        href="#"
                        className="flex justify-center items-center text-slate-500 mt-2"
                      >
                        <UserRound size={20} />
                      </a>
                      <div className="absolute -left-56 sm:-left-12 shadow-lg hidden group-hover:block mt-2 border rounded w-full sm:w-[130px] shadow-md bg-white">
                        <div className="p-2 hover:bg-slate-100 rounded">
                          <a href="#" className="text-sm text-slate-500">
                            Profile
                          </a>
                        </div>
                        <div className="p-2 hover:bg-slate-100 rounded">
                          <a href="#" className="text-sm text-slate-500">
                            My Products
                          </a>
                        </div>
                        <div className="p-2 hover:bg-slate-100 rounded">
                          <a href="#" className="text-sm text-slate-500">
                            Settings
                          </a>
                        </div>
                        <div className="p-2 hover:bg-slate-100 rounded">
                          <a href="#" className="text-sm text-slate-500">
                            API Dashboard
                          </a>
                        </div>
                        <div className="p-2 hover:bg-slate-100 rounded">
                          <a href="#" className="text-sm text-slate-500">
                            Logout
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div>
                  <div className="flex align-middle bg-slate-100 rounded-full py-2 px-5 w-[95%] ml-6 mt-5 max-sm:ml-2">
                    <Search size={18} className="mt-1 mr-2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search (ctrl + k)"
                      className="outline-0 bg-slate-100 rounded-full placeholder-sm w-[150px]"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
