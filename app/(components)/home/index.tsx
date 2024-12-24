"use client"
import Head from 'next/head';
import {SignedOut, SignInButton} from "@clerk/nextjs";

export default function Homepage() {
    return (
        <div className="min-h-screen bg-gray-900 from-gray-900 via-purple-900 to-black text-white flex flex-col items-center justify-center">
            <Head>
                <title>CsmAI - AI-Powered Insights</title>
            </Head>
            <main className="text-center px-6 py-20 max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                    Unlock AI-Powered Insights to Drive <span className="text-blue-400">Business Decisions Today</span>
                </h2>
                <p className="mt-4 text-lg text-gray-400">
                    Transform your data into actionable intelligence with our AI-driven SaaS, designed to optimize efficiency,
                    automate workflows, and provide predictive insights for informed decision-making with enhanced communication
                    and security for your business.
                </p>
                <div className="mt-8 space-x-4">
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-full">Book a Demo</button>
                    <SignedOut>
                    <SignInButton mode="modal">
                    <button className="px-4 py-2 border border-blue-600 text-white rounded-full hover:bg-blue-600">
                        Get Started for free
                    </button>
                  </SignInButton>
                    </SignedOut>

                    </div>
            </main>
        </div>
    );
}
