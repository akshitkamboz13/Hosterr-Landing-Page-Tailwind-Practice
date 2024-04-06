import React from 'react'
import { FaBars } from "react-icons/fa";

function nav() {
  return (
    <div className='flex justify-between content-center'>
        <div className='flex'>
            <img src="../../Assets/Logo.svg" alt="Logo" className="" />
            <button className="ml-3 min-w-28 my-4 max-h-7 rounded-3xl bg-gradient-to-r from-orange-400 to-red-800 p-1 text-xs text-white font-Lato">Hoster is hiring!</button>
        </div>
        <div>
          <ul className="hidden lg:flex gap-3 text-gray-700 text-lg p-4 ">
            <li>Plans</li>
            <li>Find Domain</li>
            <li>Why Hosterr</li>
          </ul>
        </div>
        <div>
          <ul className="hidden lg:flex gap-3 text-gray-700 text-lg">
            <li className='py-4'>Sign In</li>
            <button className="hidden lg:flex bg-blue-600 text-white rounded-md p-4 hover:bg-blue-700  ">
            Join Waitlist
          </button>
          </ul>
        </div>
        <div className="lg:hidden">
            <FaBars className="text-2xl" />
        </div>
    </div>
  )
}

export default nav
