"use client"
import Image from 'next/image';

const testimonials = [
    {
        name: 'Cameron Williamson',
        title: 'Web Designer',
        image: '/path-to-image1.jpg', // Replace with actual path
        text: 'Rorem ipsum dolor sit amet consectetur. Ac quam sem mi nibh volutpat enim pellentesque. Proin iaculis nisi et neque sed fermentum sollicitudin lectus.',
    },
    {
        name: 'Esther Howard',
        title: 'Web Developer',
        image: '/path-to-image2.jpg', // Replace with actual path
        text: 'At viverra enim enim sed turpis orci cursus. Imperdiet eros mauris sed sodales nisi interdum ac. Eu congue quis egestas donec lectus.',
    },
    {
        name: 'Jenny Wilson',
        title: 'UI/UX Designer',
        image: '/path-to-image3.jpg', // Replace with actual path
        text: 'Sed ut diam amet accumsan in. Elementum lorem aliquam venenatis amet sit posuere sed sit. Aliquet suspendisse vitae placerat donec.',
    },
];

const TestimonialsSection = () => {
    return (
        <section className="bg-gray-900 text-white py-16">
            <div className="container mx-auto text-center px-4">
                <h2 className="text-3xl font-bold mb-4">What our clients say</h2>
                <p className="text-lg mb-12">
                    Rmet facilisi arcu odio urna aenean erat. Pellentesque in vitae lobortis orci tincidunt facilisis.
                    Pulvinar lacus ultricies turpis urna sapien.
                </p>

                <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-md relative">
                            <div className="flex items-center mb-4">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                />
                                <div className="ml-4 text-left">
                                    <h3 className="text-sm font-semibold">{testimonial.name}</h3>
                                    <p className="text-xs text-gray-400">{testimonial.title}</p>
                                </div>
                            </div>
                            <p className="text-sm">{testimonial.text}</p>
                            <div className="absolute bottom-4 right-4 text-gray-400 text-2xl">“</div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center space-x-4 mt-8">
                    <button className="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center hover:bg-gray-600">
                        &larr;
                    </button>
                    <button className="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center hover:bg-gray-600">
                        &rarr;
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
