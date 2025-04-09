
import React from 'react'

const Aboutpage = () => {
  return (
    <div>
       <div>
 <div>
   <div 
  className="bg-black  opacity-99 text-white py-40 flex flex-col items-center justify-center"
  style={{ 
    backgroundImage: "url(image26.jpg)", 
    backgroundSize: "cover", 
    backgroundPosition: "center" 
  }}
>
  {/* Main Heading */}
  <h1 className="text-3xl mt-15 md:text-4xl lg:text-6xl font-bold text-center mb-6">
    TASTE THE FUSION <br className="hidden sm:block" /> OF FLAVORS AT TANGY TWISTER
  </h1>

  {/* Separator */}
  <div className="border-b border-gray-500 w-24 mb-8"></div>

  {/* Sub Heading */}
  <p className="text-lg md:text-xl text-center mb-10">
    Discover an exciting blend of international cuisines at Tangy Twisters.
  </p>

  {/* Explore Menu Button */}
  <button
    className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
  >
    Explore our menu
  </button>
</div>
    </div>





        
        <div className="flex bg-red-600 text-white sm:flex-row flex-col items-center justify-center p-10">
      {/* Image Section */}
      <div className="w-1/2 relative sm:mr-6 w-full object-cover mb-3 ">
        <img
          src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=600" // Replace with the actual path to your pizza image
          alt="Delicious Pizza"
          className="w-full h-auto object-cover"
        />
        {/* Optional: Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>

      {/* Text Section */}
      <div className="w-1/2 p-10 flex flex-col justify-center sm:items-start items-center w-full">
        
        <h2 className="text-4xl font-bold mb-4 sm:w-full">ABOUT TANGY TWISTERS RESTAURANT</h2>
        <p className="text-lg sm:w-full">
          At Tangy Twisters, we're not just your ordinary restaurant – we're a culinary
          destination that caters to all tastes and cravings. Specializing in a diverse
          array of offerings, we proudly serve up a mouthwatering menu featuring pizzas,
          sides, snacks, and even Indian cuisine.
        </p>
      </div>
    </div>


    
{/* <div className='text-4xl sm:text-center text-red-600 mt-16 mx-10 my-6 '>
<h1 className="text-4xl sm:text-center text-red-600 mt-16 mx-10 my-6 ">
WELCOME TO TANGY TWISTERS
            <hr className="border-t mx-1 border-black my-4" />
          </h1>
</div> */}
<div className=' sm:items-center text-red-600 mt-1 mx-1 my-6 '>
<h1 className="text-3xl text-center sm:items-center text-red-600 mt-10 mx-1 my-6 ">
WELCOME TO TANGY TWISTER
            <hr className="border-t sm:mx-10  border-black my-4 " />
          </h1>

</div>




          <div className="flex flex-col  md:flex-row items-center justify-center p-13 bg-white">


{/* Image Section */}
<div className="md:w-1/2 mb-1 md:mb-0 md:mr-9 shadow-md overflow-hidden">
  <img
    src="https://images.pexels.com/photos/8511873/pexels-photo-8511873.jpeg?auto=compress&cs=tinysrgb&w=600" // Replace with the actual image URL
    alt="Pizza POS System"
    className="w-full h-auto object-cover"
  />
</div>
{/* Text section*/}
<div className='md:w-1/2'>
  <h1 className='text-center mb-3  text-3xl'>Concept</h1>
  <p className="text-lg text-center">
    At Tangy Twisters, we're not just your ordinary restaurant – we're a culinary
    destination that caters to all tastes and cravings. Specializing in a diverse
    array of offerings, we proudly serve up a mouthwatering menu featuring pizzas,
    sides, snacks, and even Indian cuisine.
  </p>
</div>
</div>


<div className="flex flex-col md:flex-row items-center justify-center p-13 bg-white">
{/* Text section (moved to the left) */}
<div className='md:w-1/2 md:mr-9'>
  <h1 className='text-center mb-3 text-3xl'>Tradition</h1>
  <p className="text-lg text-center md:text-left">
    At Tangy Twisters, we're not just your ordinary restaurant – we're a culinary
    destination that caters to all tastes and cravings. Specializing in a diverse
    array of offerings, we proudly serve up a mouthwatering menu featuring pizzas,
    sides, snacks, and even Indian cuisine.
  </p>
</div>
{/* Image Section (moved to the right) */}
<div className="md:w-1/2 mb-1 md:mb-0 shadow-md overflow-hidden">
  <img
    src="https://images.pexels.com/photos/5638751/pexels-photo-5638751.jpeg?auto=compress&cs=tinysrgb&w=600" // Replace with the actual image URL
    alt="Pizza POS System"
    className="w-full h-auto object-cover"
  />
</div>
</div>



<div className="flex flex-col md:flex-row items-center justify-center p-13 bg-white">
{/* Image Section */}
<div className="md:w-1/2 mb-1 md:mb-0 md:mr-9 shadow-md overflow-hidden">
  <img
    src="https://images.pexels.com/photos/6259793/pexels-photo-6259793.jpeg?auto=compress&cs=tinysrgb&w=600" // Replace with the actual image URL
    alt="Pizza POS System"
    className="w-full h-auto object-cover"
  />
</div>
{/* Text section*/}
<div className='md:w-1/2'>
  <h1 className='text-center mb-3  text-3xl'>Ambiance</h1>
  <p className="text-lg text-center">
    At Tangy Twisters, we're not just your ordinary restaurant – we're a culinary
    destination that caters to all tastes and cravings. Specializing in a diverse
    array of offerings, we proudly serve up a mouthwatering menu featuring pizzas,
    sides, snacks, and even Indian cuisine.
  </p>
</div>
</div>




{/* our menu sections */}
<div className='text-4xl sm:items-center text-red-600 mt-10 mx-11 my-6 '>
<h1 className="text-4xl  text-center sm:items-center text-red-600 mt-10 mx-1 my-6 ">
OUR MENU
            <hr className="border-t sm:mx-10  border-black my-4 " />
          </h1>

</div>



          <div className="bg-gray-100 py-10">
          
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pizzas Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.pexels.com/photos/2762939/pexels-photo-2762939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Pizzas"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-center">Pizzas</h2>
              <p className="text-gray-700 text-sm text-center">
                Savor our delicious pizzas, made with premium ingredients and cooked to perfection in our wood-fired oven. From classic to specialty options, there's something to please every palate.
              </p>
            </div>
          </div>

          {/* Specials Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.pexels.com/photos/162744/tomatoes-tomato-quiche-red-yellow-162744.jpeg?auto=compress&cs=tinysrgb&w=600" // Placeholder
              alt="Specials"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-center">Specials</h2>
              <p className="text-gray-700 text-sm text-center">
                Try our chef's curated specials for exciting flavors and innovative combinations of Indian cuisine. These offerings showcase our culinary creativity and promise a memorable dining experience.
              </p>
            </div>
          </div>

          {/* Sides Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.pexels.com/photos/2295285/pexels-photo-2295285.jpeg?auto=compress&cs=tinysrgb&w=600" // Placeholder
              alt="Sides"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-center">Sides</h2>
              <p className="text-gray-700 text-sm text-center">
                Try our chef's curated specials for exciting flavors and innovative combinations. These limited-time offerings showcase our culinary creativity and promise a memorable dining experience.
              </p>
            </div>
          </div>

          {/* Appetizers Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.pexels.com/photos/8477413/pexels-photo-8477413.jpeg?auto=compress&cs=tinysrgb&w=600" // Placeholder
              alt="Appetizers"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-center">Appetizers</h2>
              <p className="text-gray-700 text-sm text-center">
                Kickstart your meal with our tempting array of appetizers. From flavorful starters to sharing platters, each option is crafted to awaken your taste buds and complement your main course.
              </p>
            </div>
          </div>

          {/* Drinks Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.pexels.com/photos/616836/pexels-photo-616836.jpeg?auto=compress&cs=tinysrgb&w=600" // Placeholder
              alt="Drinks"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-center">Drinks</h2>
              <p className="text-gray-700 text-sm text-center">
                Elevate your meal with our diverse selection of refreshing drinks. From classic beverages to signature concoctions, find the perfect thirst-quencher to accompany your dining experience.
              </p>
            </div>
          </div>

          {/* Ice Cream Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1006190/pexels-photo-1006190.jpeg?auto=compress&cs=tinysrgb&w=600" // Placeholder
              alt="Ice Cream"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-center">Ice Cream</h2>
              <p className="text-gray-700 text-sm text-center">
                Experience bliss in every scoop with our delightful ice cream selections. Indulge in creamy and flavorful creations, the perfect sweet ending to your culinary journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>




    
      {/* Hero Content */}
      <div className="relative z-7 text-center text-xl text-black py-10">
        
        <h1 className="text-xl md:text-5xl  mb-4">JOIN US FOR A DINNER</h1>
        <p className="text-lg  text-gray-500 md:text-xl mb-8">Make a reservation at Tangy Twisters Restaurant</p>
        <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-5 rounded-full">
          Reserve Now
        </button>
      </div>

      </div>
    </div>
  )
}

export default Aboutpage
