"use client"

import { FaShieldAlt, FaLock, FaUserShield } from 'react-icons/fa'; // Example icons, adjust as needed

const SecuritySection = () => {
    return (
        <section className="bg-gray-900 py-16 text-center text-white">
            <div className="max-w-4xl mx-auto">
                <h3 className="text-sm uppercase text-indigo-400 tracking-wider mb-4">Security</h3>
                <h2 className="text-3xl font-bold mb-4">Robust Security to Protect Your Data</h2>
                <p className="text-gray-400 mb-10">
                    Ensure the safety and privacy of your data with our comprehensive security measures.
                </p>

                <div className="grid gap-8 md:grid-cols-3">
                    {/* Security Feature 1 */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <FaShieldAlt className="text-4xl text-indigo-400 mx-auto mb-4" />
                        <h4 className="text-xl font-semibold mb-2">Data Encryption</h4>
                        <p className="text-gray-400">
                            All sensitive data is encrypted in transit and at rest, ensuring maximum privacy and security.
                        </p>
                    </div>

                    {/* Security Feature 2 */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <FaLock className="text-4xl text-indigo-400 mx-auto mb-4" />
                        <h4 className="text-xl font-semibold mb-2">Secure Authentication</h4>
                        <p className="text-gray-400">
                            Multi-factor authentication (MFA) adds an extra layer of security to protect your account.
                        </p>
                    </div>

                    {/* Security Feature 3 */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <FaUserShield className="text-4xl text-indigo-400 mx-auto mb-4" />
                        <h4 className="text-xl font-semibold mb-2">Access Control</h4>
                        <p className="text-gray-400">
                            Granular access control settings allow you to define permissions for different user roles.
                        </p>
                    </div>
                </div>

                <div className="mt-10 flex justify-center space-x-6">
                    <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-full">Learn More</button>
                    <button className="border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white px-6 py-2 rounded-full">Contact Security Team</button>
                </div>
            </div>
        </section>
    );
};

export default SecuritySection;
