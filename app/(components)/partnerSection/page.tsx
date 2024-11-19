import Image from 'next/image';

const PartnersSection = () => {
    return (
        <section className="bg-gray-900 py-10">
            <div className="text-center mb-6 text-white">
                <p className="text-sm uppercase tracking-wide">
                    Trusted by companies in 100+ countries around the globe.
                </p>
            </div>
            <div className="flex justify-center items-center space-x-8 md:space-x-12 lg:space-x-16">
                <Image src="/svgs/bluesky.svg" alt="BlueSky" width={80} height={40} />
                <Image src="/svgs/discord.png" alt="Firebase" width={80} height={40} />
                <Image src="/svgs/google-colab.svg" alt="Google Colaboratory" width={80} height={40} />
                <Image src="/svgs/postcss.svg" alt="PostCSS" width={40} height={40} />
                <Image src="/svgs/raspberry.svg" alt="Raspberry" width={80} height={40} />
                <Image src="/svgs/vitejs.svg" alt="ViteJS" width={80} height={40} />
                <Image src="/svgs/webcomp.svg" alt="WebComp" width={80} height={40} />
            </div>
        </section>
    );
};

export default PartnersSection;
