
import React from 'react'

const Gallery = () => {
    const galleryImages = [
        '/public/image1.jpg',
        '/public/image2.jpg',
        '/public/image3.jpg',
        '/public/image4.jpg',
        '/public/image5.jpg',
        '/public/image6.jpg',
        '/public/image7.jpg',
        '/public/image8.jpg',
        '/public/image9.jpg',
        '/public/image10.jpg',
        '/public/image11.jpg',
        '/public/image12.jpg',
        '/public/image13.jpg',
        '/public/image14.jpg',
        '/public/image15.jpg',
      ];
  return (
    <div>
      <div>
       {/* Gallery section */}
<div className="relative bg-gray-800 mt-18 mb-0 py-13 overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-70"
          src="https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg?auto=compress&cs=tinysrgb&w=600" 
          
        />
        <div className="absolute inset-0 bg-black opacity-10" aria-hidden="true" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl text-white text-semibold tracking-tight sm:text-6 xl">
           GALLERY
          </h2>
          
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
            <img src="/public/image22.jpg" alt="Dish 1" className="w-64 h-auto rounded-md shadow-md" />
            <img src="/public/image21.jpg" alt="Dish 2" className="w-64 h-auto rounded-md shadow-md" />
            <img src="/public/image17.jpg" alt="Dish 3" className="w-64 h-auto rounded-md shadow-md" />
            <img src="/public/image19.jpg" alt="Dish 1" className="w-64 h-auto rounded-md shadow-md" />
            
            <img src="/public/image16.jpg" alt="Dish 1" className="w-64 h-auto rounded-md shadow-md" />
            <img src="/public/image20.jpg" alt="Dish 1" className="w-64 h-auto rounded-md shadow-md" />
            
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
