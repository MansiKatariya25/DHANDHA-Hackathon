import { MapPin } from 'lucide-react'
import React from 'react'

function Navbar() {
  return (
    <header className="bg-white shadow px-4 py-3">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left: Logo */}
        <h1 className="text-2xl font-bold text-emerald-600">DHANDHA</h1>
        <div>
            <div className='flex justify-center items-center gap-2'>
                <MapPin color="#009966" />
                <p className='text-lg font-medium text-emerald-600'>Location</p>
            </div>
        </div>
        {/* Right: Auth buttons */}
        <div className="space-x-2">
          <button className="px-4 py-2 text-sm font-medium text-emerald-600 border border-emerald-600 rounded-md hover:bg-emerald-50 transition">
            Login
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-md hover:bg-emerald-700 transition">
            Sign up
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar