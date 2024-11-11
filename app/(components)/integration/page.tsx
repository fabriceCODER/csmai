"use client"

import { FaFacebook, FaChartLine, FaHubspot } from 'react-icons/fa'; // Example icons, replace with suitable ones

const IntegrationSection = () => {
    return (
        <section className="bg-gray-900 py-16 text-center text-white">
            <div className="max-w-4xl mx-auto">
                <h3 className="text-sm uppercase text-indigo-400 tracking-wider mb-4">Integrations</h3>
                <h2 className="text-3xl font-bold mb-4">Seamlessly Connect with Your Favorite Tools</h2>
                <p className="text-gray-400 mb-10">
                    Enhance productivity by integrating with popular platforms for CRM, analytics, and social media.
                </p>

                <div className="grid gap-8 md:grid-cols-3">
                    {/* Integration 1 */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <FaHubspot className="text-4xl text-indigo-400 mx-auto mb-4" />
                        <h4 className="text-xl font-semibold mb-2">CRM Integration</h4>
                        <p className="text-gray-400">
                            Connect with leading CRM tools like HubSpot and Salesforce to manage customer relationships effectively.
                        </p>
                    </div>

                    {/* Integration 2 */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <FaChartLine className="text-4xl text-indigo-400 mx-auto mb-4" />
                        <h4 className="text-xl font-semibold mb-2">Analytics Integration</h4>
                        <p className="text-gray-400">
                            Leverage powerful analytics platforms to gain insights into customer behavior and performance.
                        </p>
                    </div>

                    {/* Integration 3 */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <FaFacebook className="text-4xl text-indigo-400 mx-auto mb-4" />
                        <h4 className="text-xl font-semibold mb-2">Social Media Integration</h4>
                        <p className="text-gray-400">
                            Integrate with social media platforms like Facebook and Twitter for seamless engagement and outreach.
                        </p>
                    </div>
                </div>

                <div className="mt-10 flex justify-center space-x-6">
                    <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-full">Explore Integrations</button>
                    <button className="border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white px-6 py-2 rounded-full">View All</button>
                </div>
            </div>
        </section>
    );
};

export default IntegrationSection;
