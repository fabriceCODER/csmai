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
                <Image src="/images/discord" alt="Amazon" width={80} height={40} />
                <Image src="" alt="AliExpress" width={80} height={40} />
                <Image src="" alt="eBay" width={80} height={40} />
                <Image src="/images/apple-logo.png" alt="Apple" width={40} height={40} />
                <Image src="/images/samsung-logo.png" alt="Samsung" width={80} height={40} />
                <Image src="/images/nike-logo.png" alt="Nike" width={80} height={40} />
                <Image src="/images/etsy-logo.png" alt="Etsy" width={80} height={40} />
            </div>
        </section>
    );
};

export default PartnersSection;
