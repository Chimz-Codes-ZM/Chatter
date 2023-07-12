import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <header className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <Link className="block " href="/">
                <span className="sr-only">Home</span>
                <svg
                  width="210"
                  height="36"
                  viewBox="0 0 210 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.48 35.576C13.088 35.576 10.176 34.856 7.744 33.416C5.312 31.944 3.44 29.912 2.128 27.32C0.816 24.696 0.16 21.672 0.16 18.248C0.16 14.824 0.816 11.8 2.128 9.176C3.44 6.552 5.312 4.504 7.744 3.032C10.176 1.56 13.088 0.823999 16.48 0.823999C20.512 0.823999 23.808 1.832 26.368 3.848C28.96 5.832 30.576 8.632 31.216 12.248H24.448C24.032 10.424 23.136 9 21.76 7.976C20.416 6.92 18.624 6.392 16.384 6.392C13.28 6.392 10.848 7.448 9.088 9.56C7.328 11.672 6.448 14.568 6.448 18.248C6.448 21.928 7.328 24.824 9.088 26.936C10.848 29.016 13.28 30.056 16.384 30.056C18.624 30.056 20.416 29.576 21.76 28.616C23.136 27.624 24.032 26.264 24.448 24.536H31.216C30.576 27.992 28.96 30.696 26.368 32.648C23.808 34.6 20.512 35.576 16.48 35.576ZM36.6546 35V1.4H42.7986V15.368H57.8706V1.4H64.0146V35H57.8706V20.36H42.7986V35H36.6546ZM68.3853 35L80.6733 1.4H87.5853L99.8733 35H93.3453L90.6573 27.224H77.5533L74.8173 35H68.3853ZM79.2333 22.424H88.9773L84.0813 8.456L79.2333 22.424ZM108.463 35V6.344H98.671V1.4H124.447V6.344H114.607V35H108.463ZM136.822 35V6.344H127.03V1.4H152.806V6.344H142.966V35H136.822ZM157.358 35V1.4H179.294V6.344H163.502V15.56H177.854V20.36H163.502V30.056H179.294V35H157.358ZM185.108 35V1.4H197.444C200.132 1.4 202.34 1.864 204.068 2.792C205.828 3.688 207.14 4.92 208.004 6.488C208.868 8.024 209.3 9.736 209.3 11.624C209.3 13.672 208.756 15.544 207.668 17.24C206.612 18.936 204.948 20.168 202.676 20.936L209.636 35H202.58L196.34 21.752H191.252V35H185.108ZM191.252 17.24H197.06C199.108 17.24 200.612 16.744 201.572 15.752C202.532 14.76 203.012 13.448 203.012 11.816C203.012 10.216 202.532 8.936 201.572 7.976C200.644 7.016 199.124 6.536 197.012 6.536H191.252V17.24Z"
                    fill="#543EE0"
                  />
                </svg>
              </Link>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <Link
                      className="text-black font-semibold transition hover:text-gray-500/75"
                      href="/"
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-black font-semibold transition hover:text-gray-500/75"
                      href="/"
                    >
                      About us
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-black font-semibold transition hover:text-gray-500/75"
                      href="/"
                    >
                      Contact
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-black font-semibold transition hover:text-gray-500/75"
                      href="/"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <Link
                  className="rounded-md bg-white border border-[#543EE0] px-5 py-2.5 text-sm font-medium text-[#543EE0] shadow"
                  href="/login"
                >
                  Login
                </Link>

                <div className="hidden sm:flex">
                  <Link
                    className="rounded-md bg-[#543EE0] px-5 py-2.5 text-sm font-medium text-white"
                    href="/register"
                  >
                    Sign up
                  </Link>
                </div>
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
