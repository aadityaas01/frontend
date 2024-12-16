"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import PropTypes from 'prop-types';
import image from '@/assets/Sign up-bro.png';

export default function SignupFormDemo() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="flex max-w-4xl w-full mx-auto rounded-none md:rounded-2xl shadow-input bg-black shadow-[0_0_30px_10px_rgba(0,255,255,0.3)] my-16">
        {/* Left Side for Image */}
        <div className="flex-1 hidden md:block">
          {/* Replace the src with your image link */}
          <img src={image} alt="Description" className="w-full h-full object-cover rounded-l-none rounded-md" />
        </div>

        {/* Right Side for Signup Form */}
        <div className="flex-1 p-4 md:p-8">
          <h2 className="font-bold text-xl text-white">
            Welcome to Job<span className="bg-yellow-400 text-black px-1 rounded">Hub</span>
          </h2>
          <br />
          <p className="text-white text-sm max-w-sm mt-2">
            Give your stagnant career the boost it deserves—sign up now!!
          </p>
          <form className="my-8" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname" className="text-white">First name</Label>
                <Input id="firstname" placeholder="Tyler" type="text" className="text-white bg-transparent border-white/20" />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname" className="text-white">Last name</Label>
                <Input id="lastname" placeholder="Durden" type="text" className="text-white bg-transparent border-white/20" />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email" className="text-white">Email Address</Label>
              <Input id="email" placeholder="projectmayhem@fc.com" type="email" className="text-white bg-transparent border-white/20" />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="password" className="text-white">Password</Label>
              <Input id="password" placeholder="••••••••" type="password" className="text-white bg-transparent border-white/20" />
            </LabelInputContainer>
            <LabelInputContainer className="mb-8">
              <Label htmlFor="confirmpassword" className="text-white">Confirm Password</Label>
              <Input id="confirmpassword" placeholder="••••••••" type="password" className="text-white bg-transparent border-white/20" />
            </LabelInputContainer>

            <button
              className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-full"
              type="submit">
              Sign up
            </button>
            <p className="text-white text-sm mt-4 text-center">
            Already a User? <a href="/login" className="text-yellow-400 hover:underline">Log In!</a>
          </p>
          </form>
        </div>
      </div>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

LabelInputContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
