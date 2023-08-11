import React, { FormEvent, cache, useState } from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import Login_image from "../../public/unsplash_9pjBx5uVBlg.png";
import { supabase } from "../../api"

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };
  
  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };
  
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  
  const handlePasswordConfirmationChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordConfirmation(e.target.value);
  };

  async function handleSignup(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    

 const response =     await fetch('http://localhost:4000/register', {
        method: 'POST',
        body: JSON.stringify({firstName, lastName, email, password, passwordConfirmation}),
        headers: { 'Content-Type': 'application/json' },
      });
     
if ( response.status !== 200 )   {
  alert('Registration failed')
} else {
  alert("Registration successful")
}
  }
  

  
 
  return (
    <Layout>
      <section className="relative grid grid-cols-5 lg:h-screen lg:items-center">
        <div className="relative h-64 w-full sm:h-96 lg:h-full col-span-2">
          <Image
            alt="Welcome"
            src={Login_image}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900 opacity-[0.4] z-10"></div>
          <div className="absolute inset-0 z-20 text-center text-white flex flex-col items-center gap-6 justify-center px-4 h-full w-full">
            <h1 className="z-30 text-5xl ">CHATTER</h1>
            <p className="text-2xl text-start">
              Unleash the Power of Words, Connect with Like-minded Readers and
              Writers
            </p>
          </div>
        </div>

        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 col-span-3 lg:px-12 lg:py-24">
          <div className="w-full flex px-40">
            <div className="flex flex-col w-1/2">
              <h1>Register</h1>
              <div className="w-full h-2 bg-blue-500 "></div>
            </div>
            <div className="flex flex-col w-1/2">
              <h1>Login</h1>
              <div className="w-full h-2 bg-gray-300"></div>
            </div>
          </div>
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">
              Register as a Writer/Reader
            </h1>
          </div>

          <form onSubmit={handleSignup} className="mt-8 grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="FirstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>

              <input
                type="text"
                id="FirstName"
                name="first_name"
                value={firstName}
                onChange={handleFirstNameChange}
                className="mt-1 w-full rounded-md py-3 border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="LastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>

              <input
                type="text"
                id="LastName"
                name="last_name"
                value={lastName}
                onChange={handleLastNameChange}
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm py-3"
              />
            </div>

            <div className="col-span-6">
              <label
                htmlFor="Email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>

              <input
                type="email"
                id="Email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                className="mt-1 w-full rounded-md border-gray-200 py-3 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="Password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>

              <input
                type="password"
                id="Password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                className="mt-1 w-full rounded-md border-gray-200 py-3 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="PasswordConfirmation"
                className="block text-sm font-medium text-gray-700"
              >
                Password Confirmation
              </label>

              <input
                type="password"
                id="PasswordConfirmation"
                name="password_confirmation"
                value={passwordConfirmation}
                onChange={handlePasswordConfirmationChange }
                className="mt-1 w-full rounded-md border-gray-200 py-3 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>

            <div className="col-span-6">
              <label htmlFor="MarketingAccept" className="flex gap-4">
                <input
                  type="checkbox"
                  id="MarketingAccept"
                  name="marketing_accept"
                  className="h-5 w-5 rounded-md border-gray-200 py-3 bg-white shadow-sm"
                />

                <span className="text-sm text-gray-700">
                  I want to receive emails about events, product updates and
                  company announcements.
                </span>
              </label>
            </div>

            <div className="col-span-6">
              <p className="text-sm text-gray-500">
                By creating an account, you agree to our
                <a href="#" className="text-gray-700 underline">
                  terms and conditions
                </a>
                and
                <a href="#" className="text-gray-700 underline">
                  privacy policy
                </a>
                .
              </p>
            </div>

            <div className="col-span-6 sm:flex flex-col sm:items-center sm:gap-4">
              <div className="flex flex-col items-center gap-4">
                <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                  Create an account
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Already have an account?
                  <Link href="/login" className="text-gray-700 underline">
                    Log in
                  </Link>
                  .
                </p>

                <div className="w-full">
                  <div  className="inline-block cursor-pointer shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                    Sign in with Google
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Register;
