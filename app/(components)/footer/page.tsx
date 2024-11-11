"use client"
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-10">
            <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div>
                    <h2 className="text-white text-2xl font-bold">CsmAI</h2>
                    <p className="mt-4">
                        With lots of unique blocks, you can easily build and maximize the productivity of your business with our innovative solutions.
                    </p>
                    <div className="flex space-x-4 mt-6">
                        <FaTwitter className="text-white hover:text-gray-500 cursor-pointer" />
                        <FaFacebookF className="text-white hover:text-gray-500 cursor-pointer" />
                        <FaInstagram className="text-white hover:text-gray-500 cursor-pointer" />
                        <FaLinkedinIn className="text-white hover:text-gray-500 cursor-pointer" />
                    </div>
                </div>

                <div>
                    <h3 className="text-white text-lg font-semibold">Company</h3>
                    <ul className="mt-4 space-y-2">
                        <li><a href="#" className="hover:underline">About us</a></li>
                        <li><a href="#" className="hover:underline">Contact us</a></li>
                        <li><a href="#" className="hover:underline">Careers</a></li>
                        <li><a href="#" className="hover:underline">Press</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white text-lg font-semibold">Product</h3>
                    <ul className="mt-4 space-y-2">
                        <li><a href="#" className="hover:underline">Features</a></li>
                        <li><a href="#" className="hover:underline">Pricing</a></li>
                        <li><a href="#" className="hover:underline">News</a></li>
                        <li><a href="#" className="hover:underline">Support</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white text-lg font-semibold">Legal</h3>
                    <ul className="mt-4 space-y-2">
                        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                        <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                        <li><a href="#" className="hover:underline">Return Policy</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
