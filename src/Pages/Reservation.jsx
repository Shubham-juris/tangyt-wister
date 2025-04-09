
import React from 'react'

const Reservation = () => {
  return (
    <div>
      <div>
      {/* Reservation section */}
<div className="relative bg-gray-800 mt-18  py-13 overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-70"
          src="https://images.pexels.com/photos/280471/pexels-photo-280471.jpeg?auto=compress&cs=tinysrgb&w=600" 
          
        />
        <div className="absolute inset-0 bg-black opacity-10" aria-hidden="true" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl text-white text-semibold tracking-tight sm:text-6 xl">
           RESERVATION
          </h2>
          
        </div>
      </div>
    </div>


{/* reservation quotes */}

    <div className="bg-white mt-15 mb-10 font-sans py-10">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Table Reservation Title */}
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">TABLE RESERVATION</h1>

        {/* Introductory Text */}
        <p className="text-gray-600 mb-5">
          Don't miss out on the incredible dining experience at Tangy Twisters. Reserve your table now!
        </p>

        {/* Placeholder Message */}
        <div className="bg-gray-200 rounded-md py-6 px-8  mb-0 text-center text-gray-700">
          We're still setting up OpenTable integration. Check back soon!
        </div>
      </div>
    </div>



{/* reservation form */}

    <div className="bg-gray-100  mt-0  font-sans">
      <div className="max-w-2xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        {/* Reservation Title */}
        <h1 className="text-3xl  text-red-600 text-center mb-4">RESERVATION</h1>

        {/* Book Table Link */}
        <div className="text-center mb-6">
          <a href="#" className="text-gray-700 hover:underline">BOOK TABLE</a>
        </div>

        {/* Instructions */}
        <p className="text-gray-600 text-center mb-8">
          Please book your reservation online or call us.
        </p>

        {/* Reservation Form */}
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div>
            <label htmlFor="people" className="block text-gray-700 text-sm font-bold mb-2">
              People
            </label>
            <input
              type="number"
              id="people"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div>
            <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">
              Date*
            </label>
            <input
              type="date"
              id="date"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email*
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="flex flex-col items-center mb-0  justify-center min-h-[200px]">
      {/* reCAPTCHA Disclaimer */}
      <p className="text-xs text-gray-500 mb-4">
        This site is protected by reCAPTCHA and the Google{' '}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Privacy Policy
        </a>{' '}
        and{' '}
        <a
          href="https://policies.google.com/terms"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Terms of Service
        </a>{' '}
        apply.
      </p>

      {/* Book Table Button */}
      <button
        className="bg-red-600 hover:bg-red-700  text-white font-bold py-3 px-8 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      >
        Book Table
      </button>
    </div>
        </form>
      </div>
    </div>

    



    </div>
    </div>
  )
}

export default Reservation
