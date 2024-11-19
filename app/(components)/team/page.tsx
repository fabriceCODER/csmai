"use client"
import Image from 'next/image';

const TeamSection = () => {
    return (
        <section className="bg-gray-900 text-white py-16">
            <div className="container mx-auto text-center px-4">
                <h2 className="text-3xl font-bold mb-4">Meet our team</h2>
                <p className="text-lg mb-12">
                    Meet our passionate and talented team, committed to delivering exceptional results,
                    driving innovation, and transforming your vision into reality.
                </p>

                <div className="bg-gray-800 rounded-lg p-8 mb-8">
                    <p className="text-sm mb-4">
                        During a train ride, a moment of inspiration struck Vasily. He wished for a convenient study
                        tool on his phone to help him prepare for the LSAT. However, such an app didn’t exist at the
                        time. Determined to overcome this hurdle, Vasily took matters into his own hands and developed
                        one of the earliest and most comprehensive LSAT apps on the market. The app quickly gained
                        popularity, becoming the #1 paid LSAT app for over a year.
                    </p>
                    <h3 className="text-lg font-bold">Fabrice Ishimwe</h3>
                    <p className="text-sm mb-4">CEO & Founder</p>
                    <div className="flex justify-center space-x-4">
                        {/* Replace # with your actual social media links */}
                        <a href="#" className="text-blue-500">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-blue-700">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>

                <div className="flex justify-center items-center space-x-4">
                    {/* Replace these with your team members' images */}
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-700">
                        <Image src="/images/team/ceo.jpeg" alt="Team Member 1" width={80} height={80} />
                    </div>
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-700">
                        <Image src="/images/team/ceo.jpeg" alt="Team Member 2" width={80} height={80} />
                    </div>
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-700">
                        <Image src="/images/team/ceo.jpeg" alt="Team Member 3" width={80} height={80} />
                    </div>
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-700">
                        <Image src="/images/team/ceo.jpeg" alt="Team Member 4" width={80} height={80} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
