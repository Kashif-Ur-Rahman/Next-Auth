"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const Component = () => {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <>
          <img
            src={session.user?.image as string}
            className="rounded-full h-20 w-20"
          ></img>
          <h1 className="text-3xl text-green-500 font-bold">
            Welcome back, {session.user?.name}
          </h1>
          <p className="text-2xl font-semibold">{session.user?.email}</p>
          <button
            onClick={() => signOut()}
            className="border border-black rounded-lg bg-red-400 px-5 py-1"
          >
            Sign Out
          </button>
        </>
      ) : (
        <>
          <h1 className="text-3xl text-red-500 font-bold">
            You're not logged in
          </h1>
          <div className="flex space-x-5">
            <button
              onClick={() => signIn("google")}
              className="text-white border border-black bg-[#558AED] font-medium rounded-lg px-5 py-1"
            >
              Sign in with Google
            </button>
            <button
              onClick={() => signIn("github")}
              className="text-white border border-white rounded-lg bg-black font-medium px-5 py-1"
            >
              Sign in with GitHub
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Component;
