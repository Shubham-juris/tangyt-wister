
import React from 'react'

const Gallery = () => {
    const galleryImages = [
        '/image1.jpg',
        '/image2.jpg',
        '/image3.jpg',
        '/image4.jpg',
        '/image5.jpg',
        '/image6.jpg',
        '/image7.jpg',
        '/image8.jpg',
        '/image9.jpg',
        '/image10.jpg',
        '/image11.jpg',
        '/image12.jpg',
        '/image13.jpg',
        '/image14.jpg',
        '/image15.jpg',
      ];
  return (
    <div>
      <div>

      <div>
  {/* Gallery section */}
  <div className="relative bg-gray-800 mt-12 mb-0 py-10 md:py-16 overflow-hidden">
    <div className="absolute inset-0">
      <img
        className="w-full h-full object-cover opacity-60 blur-sm md:blur-none transform scale-105 md:scale-100 transition-all duration-500"
        src="https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Gallery Background"
      />
      <div className="absolute inset-0 bg-black opacity-30 md:opacity-10" aria-hidden="true" />
    </div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl text-white font-semibold tracking-tight mb-4">
          GALLERY
        </h2>
        <p className="mt-2 text-lg text-gray-300 sm:px-6 lg:px-24">
          Explore our delicious dishes and vibrant atmosphere.
        </p>
        {/* Optional: Add a subtle animation to the heading */}
        <style jsx>{`
          h2 {
            transition: transform 0.3s ease-in-out;
          }
          h2:hover {
            transform: translateY(-2px);
          }
        `}</style>
      </div>
      {/* Optional: Add a grid of images below the heading */}
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <img className="w-full h-auto object-cover" src=".../image1.jpg" alt="Image 1" />
        </div>
        <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <img className="w-full h-auto object-cover" src=".../image2.jpg" alt="Image 2" />
        </div>
        <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <img className="w-full h-auto object-cover" src=".../image3.jpg" alt="Image 3" />
        </div>
        <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <img className="w-full h-auto object-cover" src=".../image4.jpg" alt="Image 4" />
        </div>
      </div>
    </div>
  </div>
</div>









    <div className="bg-red-500 py-10 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gallery Title */}
        <h2 className="text-2xl mt-11 text-center mb-8">
          TANGY TWISTERS'S KITCHEN: A PHOTO GALLERY OF OUR MOUTHWATERING DISHES
          <hr className="border-t border-gray my-8" />
        </h2>

        {/* Carousel Placeholder */}
        <div className="bg-black bg-opacity-10 rounded-lg p-6">
          <p className="text-center text-lg italic">
            
          </p>
          
          
          <div className="flex overflow-x-auto space-x-4">
            <img src="/image22.jpg" alt="Dish 1" className="w-64 h-auto rounded-md shadow-md" />
            <img src="/image21.jpg" alt="Dish 2" className="w-64 h-auto rounded-md shadow-md" />
            <img src="/image17.jpg" alt="Dish 3" className="w-64 h-auto rounded-md shadow-md" />
            <img src="/image19.jpg" alt="Dish 1" className="w-64 h-auto rounded-md shadow-md" />
            
            <img src="/image16.jpg" alt="Dish 1" className="w-64 h-auto rounded-md shadow-md" />
            <img src="/image20.jpg" alt="Dish 1" className="w-64 h-auto rounded-md shadow-md" />
            
          </div>
          
        </div>
      </div>
    </div>


    <div className="bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Our Delicious Dishes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative  overflow-hidden shadow-md">
              <img
                src={image}
                alt={`Dish ${index + 1}`}
                className="w-full h-full object-cover aspect-square"
              />
              {/* Optional: Add an overlay or caption */}
              {/* <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">Caption</p>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>




    </div>
    </div>
  )
}

export default Gallery
