"use client"
const CommunitySection = () => {
    return (
        <section className="bg-gray-900 text-white py-16 flex justify-center items-center">
            <div className="bg-gradient-to-r from-indigo-900 via-blue-900 to-gray-900 rounded-lg p-10 max-w-3xl w-full shadow-lg text-center">
                <div className="flex justify-center mb-6">
                    {/* Add a Discord logo or any icon here */}
                    <img
                        src="/images/discord.png"
                        alt="Discord Logo"
                        className="w-16 h-16"
                    />
                </div>
                <h2 className="text-2xl font-bold mb-4">Join the community</h2>
                <p className="text-base mb-8">
                    Join our 400,000+ person community and contribute to a more private, safe, and enjoyable experience.
                    Start now for free.
                </p>
                <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-6 rounded-full transition duration-300">
                    Join Discord
                </button>
            </div>
        </section>
    );
};

export default CommunitySection;
