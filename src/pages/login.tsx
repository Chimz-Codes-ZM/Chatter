import React, { FormEvent, useState, useContext } from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import { useRouter } from "next/router";
import Login_image from "../../public/unsplash_9pjBx5uVBlg.png";
import { UserContext } from "@/UserContext";
import Link from "next/link";

function Login() {
  const router = useRouter();

  const { userInfo, setUserInfo } = useContext(UserContext) || {};
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const response = await fetch("https://chatter-backend-seven.vercel.app/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if (response.ok) {
      response.json().then((userInfo) => {
        if (setUserInfo) {
          setUserInfo(userInfo);
          router.push("/dashboard");
        }
      });
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    <Layout>
      <section className="relative grid grid-cols-5 lg:h-screen lg:items-center">
        <div className="relative h-64 w-full sm:h-96 lg:h-full col-span-2 lg:block hidden">
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

        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:col-span-3 col-span-5 lg:px-8 lg:py-24">
          <div className="w-full flex px-8 lg:px-40 pb-20">
            <div className="flex flex-col w-1/2">
              <h1>Register</h1>
              <div className="w-full h-2 bg-gray-300"></div>
            </div>
            <div className="flex flex-col w-1/2">
              <h1>Login</h1>
              <div className="w-full h-2 bg-blue-500"></div>
            </div>
          </div>
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Welcome back!</h1>
          </div>

          <form
            onSubmit={handleLogin}
            className="mx-auto mb-0 mt-8 max-w-md space-y-4"
          >
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <div className="relative">
                <input
                  type="password"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500 flex gap-2">
                No account?
                <Link className="underline" href="/register">
                  Sign up
                </Link>
              </p>

              <button
                type="submit"
                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}

export default Login;
