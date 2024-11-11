"use client"
const Navbar = () =>{
    return (
        <div className="bg-blue-900">
        <header className="w-full max-w-5xl mx-auto p-6 flex items-center justify-between">
            <a href="/" className="text-xl font-bold decoration-none">CsmAI</a>
            <nav className="flex space-x-8">
                <a href="#" className="hover:text-gray-300">Home</a>
                <a href="#" className="hover:text-gray-300">About</a>
                <a href="#" className="hover:text-gray-300">Features</a>
                <a href="#" className="hover:text-gray-300">Pricing</a>
                <a href="#" className="hover:text-gray-300">Blog</a>
            </nav>
            <button
                className="px-4 py-2 border border-blue-600 text-white rounded-full hover:bg-blue-600 hover:text-white">Get
                Started
            </button>
        </header>
        </div>
    )
}
export default Navbar;