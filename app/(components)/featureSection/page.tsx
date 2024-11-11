"use client"

import { FaNetworkWired, FaMagic, FaMobileAlt } from 'react-icons/fa'; // Import icons or replace with suitable SVGs or icons

const FeaturesSection = () => {
    return (
        <section className="bg-gray-900 py-16 text-center text-white">
            <div className="max-w-4xl mx-auto">
                <h3 className="text-sm uppercase text-indigo-400 tracking-wider mb-4">Features</h3>
                <h2 className="text-3xl font-bold mb-4">Discover the Tools that Drive Success</h2>
                <p className="text-gray-400 mb-10">
                    Unleash innovation and accelerate growth with our dynamic product.
                </p>

                <div className="grid gap-8 md:grid-cols-3">
                    {/* Feature 1 */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <FaMagic className="text-4xl text-indigo-400 mx-auto mb-4" />
                        <h4 className="text-xl font-semibold mb-2">Cutting-Edge Innovation</h4>
                        <p className="text-gray-400">
                            Experience groundbreaking technological advancements that push the boundaries of what's possible.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <FaNetworkWired className="text-4xl text-indigo-400 mx-auto mb-4" />
                        <h4 className="text-xl font-semibold mb-2">Seamless Connectivity</h4>
                        <p className="text-gray-400">
                            Stay connected anytime, anywhere with our robust and reliable network infrastructure.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <FaMobileAlt className="text-4xl text-indigo-400 mx-auto mb-4" />
                        <h4 className="text-xl font-semibold mb-2">Intuitive User Interface</h4>
                        <p className="text-gray-400">
                            Enjoy a seamless and intuitive user experience with our sleek, user-friendly interface.
                        </p>
                    </div>
                </div>

                <div className="mt-10 flex justify-center space-x-6">
                    <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-full">Contact Us</button>
                    <button className="border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white px-6 py-2 rounded-full">View All</button>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
