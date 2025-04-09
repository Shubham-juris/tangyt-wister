import React from 'react'

const Experience = () => {
  return (
    <div>
      {/* section1 */}
      <div className="py-16 bg-red-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Text Content */}
        <div className="py-8">
          <h2 className="text-3xl  mb-4">The Tangy Twisters <br></br>Experience</h2>
          <div className="border-b border-white pb-4 mb-6"></div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Our Concept</h3>
            <p className="text-lg leading-relaxed mb-4">
              At Tangy Twisters, we believe that dining out should be an
              experience that engages all of your senses. That's why we
              create dishes that not only taste amazing but also look and
              smell incredible. We believe that every meal should be a
              celebration and strive to make every visit to our restaurant
              a memorable one.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Our Atmosphere</h3>
            <p className="text-lg leading-relaxed mb-4">
              Our restaurant is designed to provide a comfortable and
              inviting atmosphere for all of our guests. Whether you're
              looking for a romantic night out or a fun evening with
              friends, our restaurant is the perfect place to relax and
              unwind. From the warm lighting to the cozy seating, every
              detail has been carefully curated to create an unforgettable
              dining experience.
            </p>
          </div>

         
          <div>
            <h3 className="text-xl font-semibold mb-2">Tradition</h3>
            <p className="text-lg leading-relaxed mb-4">
              At Tangy Twisters, we believe that a great meal is not complete without a great drink. That's Why we offer a wide selection of beverages to complement your meal and enhances your dining experience. From refreshing cocktails to artisanal sodas,we have something for everyone.our drink menu is carefully curated to provide the perfect pairing for our dishes.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with your actual pizza image URL
            alt="Delicious Pizza"
            className="object-cover w-full h-full"
            style={{ minHeight: '300px' }} // Adjust minimum height as needed
          />
        </div>
      </div>
    </div>





{/* section2 */}

    <div className="py-16 bg-gray-100 sm:items-center">

    <h1 className="text-3xl  sm:text-4xl text-center">
            DELICIOUS CUISINE AT TANGY TWISTER
            <hr className="border-t mx-23 border-gray my-8" />
          </h1>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Appetizers */}
          <div>
            <h3 className="text-xl font-semibold text-red-600 mb-4">
              APPETIZERS
            </h3>
            <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden shadow-md">
              <img
                src="https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Appetizers"
                className="object-cover w-full h-full"
              />
            </div>
            <p className="mt-6 text-base text-gray-600 leading-relaxed">
              Enhance your meal with our irresistible Appetizers that perfectly
              complement our pizzas. Chicken Wings are the perfect start to your
              dining experience.
            </p>
          </div>

          {/* Pizza */}
          <div>
            <h3 className="text-xl font-semibold text-red-600 mb-4">PIZZA</h3>
            <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden shadow-md">
              <img
                src="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Pizza"
                className="object-cover w-full h-full"
              />
            </div>
            <p className="mt-6 text-base text-gray-600 leading-relaxed">
              Indulge in our handcrafted pizzas, where every bite bursts with
              flavor and freshness. From classic favorites to innovative
              creations, our pizzas are made with the finest ingredients.
            </p>
          </div>

          {/* Drink */}
          <div>
            <h3 className="text-xl font-semibold text-red-600 mb-4">DRINK</h3>
            <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden shadow-md">
              <img
                src="https://images.pexels.com/photos/169391/pexels-photo-169391.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Drink"
                className="object-cover w-full h-full"
              />
            </div>
            <p className="mt-6 text-base text-gray-600 leading-relaxed">
              Satisfy your thirst with our selection of refreshing drinks,
              carefully chosen to complement the flavors of our pizzas and sides.
              Cocktails, Juices and Tea are perfect for pairing with our pizzas.
            </p>
          </div>
        </div>
      </div>
    </div>



{/* reservation section */}

    <div className="relative bg-gray-800 py-10 overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-60"
          src="https://images.pexels.com/photos/5908229/pexels-photo-5908229.jpeg?auto=compress&cs=tinysrgb&w=600" 
          alt="Making a pizza"
        />
        <div className="absolute inset-0 bg-black opacity-40" aria-hidden="true" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl text-white text-semibold tracking-tight sm:text-4xl">
            MAKE A RESERVATION WITH US
          </h2>
          <div className="mt-6">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-3xl bg-red-600 hover:bg-red-700 text-white"
            >
              Reserve Now
            </a>
          </div>
        </div>
      </div>
    </div>

{/* gallery section */}
<div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl text-gray-800 mb-8">
          A PICTURE IS WORTH A THOUSAND BITES: EXPLORE TANGY TWISTERS'S CULINARY DELIGHTS
          <hr className="border-t border-gray my-8" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Image 1 */}
          <div className="shadow-md rounded-lg overflow-hidden">
            <img
              src="https://images.pexels.com/photos/5953588/pexels-photo-5953588.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Culinary Delight 1"
              className="w-full h-auto object-cover"
              style={{ minHeight: '200px' }} // Adjust as needed
            />
          </div>

          {/* Image 2 */}
          <div className="shadow-md rounded-lg overflow-hidden">
            <img
              src="https://images.pexels.com/photos/13735955/pexels-photo-13735955.jpeg?auto=compress&cs=tinysrgb&w=600" // Replace with your actual pizza image URL
              alt="Culinary Delight 2"
              className="w-full h-auto object-cover"
              style={{ minHeight: '200px' }} // Adjust as needed
            />
          </div>






          {/* Image 3 */}
          <div className="shadow-md rounded-lg overflow-hidden">
            <img
              src="https://images.pexels.com/photos/6205541/pexels-photo-6205541.jpeg?auto=compress&cs=tinysrgb&w=600" // Replace with your actual drinks image URL
              alt="Culinary Delight 3"
              className="w-full h-auto object-cover"
              style={{ minHeight: '200px' }} // Adjust as needed
            />
          </div>
        </div>




        {/* Optional: Carousel Indicators (if you want to imply more images) */}
        <div className="mt-6 flex justify-center space-x-2">
          <button className="w-3 h-3 bg-gray-300 rounded-full focus:outline-none">
            
          </button>
          <button className="w-3 h-3 bg-gray-500 rounded-full focus:outline-none"></button>
          <button className="w-3 h-3 bg-gray-300 rounded-full focus:outline-none"></button>
        </div>
      </div>
    </div>




    </div>
    
  )
}

export default Experience
