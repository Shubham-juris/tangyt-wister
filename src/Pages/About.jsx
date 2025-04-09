import React from 'react'

const About = () => {
  return (
    <div>
      {/* about section ( about tangy twister) */}

    <div className="py-11 mt-18 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6  text-center lg:px-8">
      <h1 className="text-5xl my-8 mb-4">
            ABOUT TANGY TWISTER
            <hr className="border-t border-gray my-8" />
          </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Our Food */}
          <div className="text-center">
            <div className="relative w-55 h-55 mx-auto rounded-full overflow-hidden shadow-md">
              <img
                src="https://images.pexels.com/photos/1435903/pexels-photo-1435903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Replace with your actual image URL
                alt="Our Food"
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">Our food</h3>
            <p className="mt-3 text-base text-gray-500">
              At Tangy Twisters, we are passionate about creating delicious and
              high-quality meals using fresh ingredients sourced from local
              farmers. Our chefs have years of experience and are dedicated to
              providing an exceptional dining experience.
            </p>
          </div>
{/* Our Menu */}
          <div className="text-center">
            <div className="relative w-55 h-55 mx-auto rounded-full overflow-hidden shadow-md">
              <img
                src="https://images.pexels.com/photos/3762069/pexels-photo-3762069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Replace with your actual image URL
                alt="Our Menu"
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">Our Menu</h3>
            <p className="mt-3 text-base text-gray-500">
              We offer a wide variety of dishes to suit all tastes, including
              Pizza, Indian cuisine, vegetarian, mexican,chinese and vegan options.  Our menu
              changes seasonally to ensure we are always using the freshest
              ingredients available.
            </p>
          </div>
          {/* Our Team */}
          <div className="text-center">
            <div className="relative w-55 h-55 mx-auto rounded-full overflow-hidden shadow-md">
              <img
                src="https://images.pexels.com/photos/6937441/pexels-photo-6937441.jpeg?auto=compress&cs=tinysrgb&w=600" // 
                alt="Our Team"
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">Our Team</h3>
            <p className="mt-3 text-base text-gray-500">
              Our team is made up of experienced professionals who are passionate
              about food and hospitality. From our chefs to our servers, everyone
              at Tangy Twisters is dedicated to providing the best possible
              dining experience to our guests.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About
