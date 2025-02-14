import React from "react";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <div className="w-[90%] md:w-[35%] lg:w-[28%] flex flex-col items-center space-y-8 border-secondary border-2 rounded-sm px-8 py-10">
      <h1 className="text-secondary text-2xl font-[500]">Sign Up</h1>
      <form className="w-full flex flex-col space-y-3" action="">
        <input
          className="w-full border border-secondary rounded-sm py-2 px-4 focus:outline-2 focus:outline-secondary outline-0 invalid:outline-2 invalid:outline-red-600 invalid:text-red-600"
          type="text"
          placeholder="Username"
        />
        <input
          className="w-full border border-secondary rounded-sm py-2 px-4 focus:outline-2 focus:outline-secondary outline-0 invalid:outline-2 invalid:outline-red-600 invalid:text-red-600"
          type="email"
          placeholder="Email"
        />
        <input
          className="w-full border border-secondary rounded-sm py-2 px-4 focus:outline-2 focus:outline-secondary outline-0 invalid:outline-2 invalid:outline-red-600 invalid:text-red-600"
          type="password"
          placeholder="password"
        />
        <button className="bg-secondary text-primary text-sm py-2 rounded-sm font-[400] cursor-pointer">
          Sign Up
        </button>

        <div className="mt-7">
          <p className="text-center text-secondary text-sm">
            Alredy have an account ?
            <Link to="/login" className="text-sm text-blue-700 font-[500] ml-2 cursor-pointer">
                Sign In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
