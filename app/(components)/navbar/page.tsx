"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import React from "react";

const Navbar = () => {
    return (
        <div className="bg-blue-900">
            <header className="w-full max-w-5xl mx-auto p-6 flex items-center justify-between">
                <a href="/" className="text-xl font-bold decoration-none text-white">
                    Subizwa
                </a>
                <nav className="flex space-x-8">
                    <a href="#" className="hover:text-gray-300 text-white">Home</a>
                    <a href="#" className="hover:text-gray-300 text-white">About</a>
                    <a href="#" className="hover:text-gray-300 text-white">Features</a>
                    <a href="#" className="hover:text-gray-300 text-white">Pricing</a>
                    <a href="#" className="hover:text-gray-300 text-white">Blog</a>
                </nav>
                <div className="flex items-center space-x-4">
                    <SignedOut>
                        <SignInButton mode="modal">
                            <button className="px-4 py-2 border border-blue-600 text-white rounded-full hover:bg-blue-600">Get Started
                            </button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                       <UserButton />
                    </SignedIn>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
