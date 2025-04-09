
import React from 'react'

const Contactus = () => {
  return (
    <div>
      {/* section1 */}

<div className="relative bg-gray-800 mt-15 mb-0 py-13 overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-70"
          src="https://images.pexels.com/photos/3682838/pexels-photo-3682838.jpeg?auto=compress&cs=tinysrgb&w=600" 
          
        />
        <div className="absolute inset-0 bg-black opacity-10" aria-hidden="true" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl text-white text-semibold tracking-tight sm:text-6 xl">
           CONTACT US
          </h2>
          
        </div>
      </div>
    </div>



{/* section2 */}
      <div className="bg-gray-100 py-12">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Title */}
        <h2 className="text-3xl font-semibold text-red-600 mb-6 text-center">
          Contact Tangy Twisters
        </h2>

        {/* Message */}
        <p className="text-gray-700 mb-8 text-center">Send us a message!</p>

        {/* Contact Form */}
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
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email*
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
              How can we serve you?
            </label>
            <textarea
              id="message"
              rows="4"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>

          {/* Send Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline"
            >
              Send
            </button>
          </div>
        </form>

        {/* reCAPTCHA Disclaimer */}
        <p className="text-xs text-gray-500 mt-8 mb-10 text-center">
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
      </div>
    </div>
    </div>
    
  )
}

export default Contactus
