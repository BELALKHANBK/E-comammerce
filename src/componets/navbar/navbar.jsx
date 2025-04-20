import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

const navber = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md  justify-between">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold text-black">Auction<span className="text-blue-700">Gallery</span></div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-600 font-bold text-xl">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-bold text-xl">Auction</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-bold text-xl">Categories</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-bold text-xl">How to work</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden ">
          <button onClick={toggleMenu}>
            {isOpen ? <IoCloseOutline color="black" size={30} /> : <IoMenu color="black" size={30} />}
          </button>
        </div>
        
     <div className="hidden lg:block">
     <div tabindex="0" role="button" class="btn  btn-circle mr-2">
        <div class="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
          <span class=" badge-sm indicator-item">9</span>
        </div>
      </div>

      <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://i.ibb.co.com/CK2CSvgZ/fiver.jpg" />
        </div>
      </div>
      
    </div>
     </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-400 opacity-80 ml-auto text-center space-y-2 border border-amber-300  w-40 ">
          <a href="#" className="block text-gray-700 hover:text-red-500 font-bold">Home</a>
          <a href="#" className="block text-gray-700 hover:text-red-500 font-bold">Auction</a>
          <a href="#" className="block text-gray-700 hover:text-red-500 font-bold">Categories</a>
          <a href="#" className="block text-gray-700 hover:text-red-500 font-bold">How Two Work</a>
        </div>

        
      )}


    </nav>
  );
};

export default navber;