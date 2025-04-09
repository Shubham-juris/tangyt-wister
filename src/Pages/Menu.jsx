import React from 'react'

const Menu = () => {
  return (
    <div>
      <div>
{/* ............section1............ */}


     <div className="flex bg-black mt-18 text-white sm:flex-row flex-col items-center justify-center p-10">
      {/* Image Section */}
      <div className="w-1/2 relative mt-11 sm:mr-6 w-full object-cover mb-3">
        <img
          src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600" // Replace with the actual path to your pizza image
          alt="Delicious Pizza"
          className="w-full h-auto object-cover"
        />
        {/* Optional: Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>

      {/* Text Section */}
      <div className="w-1/2 p-10 flex flex-col justify-center sm:items-start items-center w-full">
       
        <h2 className="text-4xl font-bold mb-4">ABOUT TANGY TWISTERS RESTAURANT</h2>
        <p className="text-lg">
          At Tangy Twisters, we're not just your ordinary restaurant – we're a culinary
          destination that caters to all tastes and cravings. Specializing in a diverse
          array of offerings, we proudly serve up a mouthwatering menu featuring pizzas,
          sides, snacks, and even Indian cuisine.
        </p>
      </div>
    </div>  



{/* pizza section */}
    <div className="relative bg-gray-800 mt-21 mb-0 py-13 overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-60"
          src="https://images.pexels.com/photos/263041/pexels-photo-263041.jpeg?auto=compress&cs=tinysrgb&w=600" 
          
        />
        <div className="absolute inset-0 bg-black opacity-10" aria-hidden="true" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl text-white text-semibold tracking-tight sm:text-6 xl">
            PIZZAS
          </h2>
          
        </div>
      </div>
    </div>


    


    <div className="bg-white py-1">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 space-y-8">
      
    <h1 className="text-3xl  text-gray-600 mt-15 mx-2 my-6 ">
 MENU
            <hr className="border-t mx-0 border-black my-4" />
          </h1>

        {/* Category Title */}
        <h3 className="text-2xl  text-red-600 mb-4">Classic Pizzas (Medium/Extra Large)</h3>
        <p className="text-gray-600 mb-6">Savor our delicious pizzas, made with premium ingredients and cooked to perfection in our wood-fired oven.</p>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-9 gap-x-5">
            {/* Italian Classic */}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Italian Classic</h4>
                    <p className="text-gray-600 text-sm">Covered with Pepperoni, Bacon, Beef & Sausage.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $12.99 / $17.99
                </div>
            </div>

            {/* Bacon Pineapple */}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Bacon Pineapple</h4>
                    <p className="text-gray-600 text-sm">Covered with Bacon, Ham & Pineapple.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $15.99 / $19.99
                </div>
            </div>

            {/* Pepperoni */}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Pepperoni</h4>
                    <p className="text-gray-600 text-sm">Covered with premium sauce ,cheese made from mozzarella, and pepperoni.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $16.99 / $19.99
                </div>
            </div>

            {/* Sausage Pizza */}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Sausage Pizza</h4>
                    <p className="text-gray-600 text-sm">Covered with sausage and real cheese made from mozzarella.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $16.99 / $20.99
                </div>
            </div>

            {/* Hawaiian */}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Hawaiian</h4>
                    <p className="text-gray-600 text-sm">Covered With Ham, Bacon, & Pineapple.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $16.99 / $20.99
                </div>
            </div>

            {/* Philly Cheesesteak */}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Philly Cheesesteak</h4>
                    <p className="text-gray-600 text-sm">Beef-original recipe, loaded with grilled onions & peppers.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $17.99 / $21.99
                </div>
            </div>

            {/* Canadian */}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Canadian</h4>
                    <p className="text-gray-600 text-sm">Pepperoni, Mushrooms, & Bacon.</p>
                </div>
                <div className="text-gray-700 text-sm ">
                    $16.99 / $19.99
                </div>
            </div>



{/* Bacon Cheddar Mozzarella */}
<div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Bacon Cheddar Mozzarella</h4>
                    <p className="text-gray-600 text-sm">Covered with Bacon, Beef,Mushroom onions and cheddar.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $16.99 / $21.99
                </div>
            </div>



            {/* Chicken Shawarma */}
<div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Chicken Shawarma </h4>
                    <p className="text-gray-600 text-sm">Covered with Chicken,onions $ tomatoes.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $16.99 / $19.99
                </div>
            </div>


            

 {/* Veggie Classic */}
 <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Veggie Classic</h4>
                    <p className="text-gray-600 text-sm">Covered with Mushroom,onion,green,pepper $ tomatoes.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $16.99 / $19.99
                </div>
            </div>

 {/* Garden veggie*/}
 <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Garden veggie</h4>
                    <p className="text-gray-600 text-sm">Covered with onions,green,peppers,pineapples $ Black olivers</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $16.99 / $20.99
                </div>
            </div>

 {/* BBQ Chicken */}
 <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">BBQ Chicken</h4>
                    <p className="text-gray-600 text-sm">Covered with Mushroom,onions,BBQ chicken $ Hor peppers.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $16.99 / $20.99
                </div>
            </div>
{/* Buffalo Chicken */}
<div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Buffalo Chicken</h4>
                    <p className="text-gray-600 text-sm">Covered with new Buffalo sauce with a hint of the buttery richness .</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $16.99 / $20.99
                </div>
            </div>



            {/* Supreme */}
            <div className="flex justify-between items-baseline gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Supreme</h4>
                    <p className="text-gray-600 text-sm">Pepperoni, Mushrooms, Green Peppers, Onions, Sausage & Bacon.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $17.99 / $22.99
                </div>
            </div>
        </div>
    </div>
</div>



{/* Special pizza section */}
<div className="relative bg-gray-800 mt-21 mb-0 py-13 overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-60"
          src="https://images.pexels.com/photos/10836977/pexels-photo-10836977.jpeg?auto=compress&cs=tinysrgb&w=600" 
          
        />
        <div className="absolute inset-0 bg-black opacity-10" aria-hidden="true" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl text-white text-semibold tracking-tight sm:text-6 xl">
           SPECIAL PIZZAS
          </h2>
          
        </div>
      </div>
    </div>


<div className="bg-white py-1">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 space-y-8">
      
    <h1 className="text-3xl  text-gray-600 mt-15 mx-2 my-6 ">
 MENU
            <hr className="border-t mx-0 border-black my-4" />
          </h1>

        {/* Category Title */}
        <h3 className="text-2xl  text-red-600 mb-4">Special Pizzas (Medium/Extra Large)</h3>
        <p className="text-gray-600 mb-6">Savor our delicious pizzas, made with premium ingredients and cooked to perfection in our wood-fired oven.</p>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-9 gap-x-5">
            {/* Tandoori chicken Pizza */}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Tandoori chicken Pizza</h4>
                    <p className="text-gray-600 text-sm">Covered with cheese,red onion,jalepeno $ Tandoori chicken.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $16.99 / $22.99
                </div>
            </div>

            {/* Soya Chaap Tikka Pizza */}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Soya Chaap Tikka Pizza</h4>
                    <p className="text-gray-600 text-sm">Covered with a Marinated Soya,banana peppers and mozzarella cheese.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $17.99 / $23.99
                </div>
            </div>

            {/* Malai Chaap Pizza */}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Malai Chaap Pizza</h4>
                    <p className="text-gray-600 text-sm">Covered with Malai,red Chilli powder $ Ginger-Garlic Paste.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $16.99 / $22.99
                </div>
            </div>

            {/* Butter Chicken */}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Butter Chicken </h4>
                    <p className="text-gray-600 text-sm">Covered with Marinated Paneer,Red peppers,jalapenos $ Mozzarella.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $16.99 / $22.99
                </div>
            </div>

            {/* Shahi Paneer Pizza*/}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Shahi Paneer Pizza</h4>
                    <p className="text-gray-600 text-sm">Covered With Onion,jalapeno,shahi paneer and Mozzarella Cheese.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $17.99 / $22.99
                </div>
            </div>

            {/* Garden Fresh Pizza */}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Garden Fresh Pizza</h4>
                    <p className="text-gray-600 text-sm">Covered with Green Peppers,Onions,Mushrooms,Black olivers $ Cheese.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $16.99 / $20.99
                </div>
            </div>

            {/* Greek Pizza */}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Greek Pizza</h4>
                    <p className="text-gray-600 text-sm">Covered with Red Onions,Grilled chicken,Black Olivers,Mozzarella.</p>
                </div>
                <div className="text-gray-700 text-sm ">
                    $16.99 / $21.99
                </div>
            </div>



{/* Chicken Alfredo */}
<div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800"> Chicken Alfredo</h4>
                    <p className="text-gray-600 text-sm">Covered with Chicken,Bacon, onions with Homemade Alfredo Sauce.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $16.99 / $21.99
                </div>
            </div>



            {/* Mexican */}
<div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Mexican </h4>
                    <p className="text-gray-600 text-sm">Covered with Chicken,onions,sausage,Jalapenos $ Black Olives.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $16.99 / $22.99
                </div>
            </div>


            

 {/*Deluxe*/}
 <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Deluxe</h4>
                    <p className="text-gray-600 text-sm">Covered with Mushroom,Pepperoni,Green peppers $ Sausage.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $16.99 / $19.99
                </div>
            </div>
            </div>
    </div>
</div>


{/* appetizer section */}

<div className="relative bg-gray-800 mt-21 mb-0 py-13 overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-60"
          src="https://images.pexels.com/photos/39826/chunks-wreak-menu-gastronomy-39826.jpeg?auto=compress&cs=tinysrgb&w=600" 
          
        />
        <div className="absolute inset-0 bg-black opacity-10" aria-hidden="true" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl text-white text-semibold tracking-tight sm:text-6 xl">
            APPETIZERS
          </h2>
          
        </div>
      </div>
    </div>
    


    <div className="bg-white py-1">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 space-y-8">
      
    <h1 className="text-3xl  text-gray-600 mt-15 mx-2 my-6 ">
 MENU
            <hr className="border-t mx-0 border-black my-4" />
          </h1>

        {/* Category Title */}
        <h3 className="text-2xl  text-red-600 mb-4">Indian Style</h3>
        <p className="text-gray-600 mb-6">The best Indian Appetizers at Tangy Twisters.</p>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-9 gap-x-5">
            {/* Paneer Tikka*/}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Paneer Tikka</h4>
                    <p className="text-gray-600 text-sm">Grilled paneer with bell peppers and onions,served with mint chutney and lemon.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $12.99 
                </div>
            </div>

            {/* Paneer Pakora */}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Paneer Pakora</h4>
                    <p className="text-gray-600 text-sm">Gram flour-coated,deep-fried paneer cubes served with assorted chutneys.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $13.99 
                </div>
            </div>

            {/* Mushroom Tikka */}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Mushroom Tikka</h4>
                    <p className="text-gray-600 text-sm">Grilled mushrooms with bell peppers and onions,served with mint chutney and lemon.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $16.99
                </div>
            </div>

            {/* Mix Pakora */}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Mix Pakora</h4>
                    <p className="text-gray-600 text-sm">Crispy mixed vegetables pakoras,deep-fried and served with assorted chutneys</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $10.99
                </div>
            </div>

            {/* Chaap Tikka*/}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Chaap Tikka</h4>
                    <p className="text-gray-600 text-sm">Grilled Soya Chaap with bell peppers and onions,served with mint chutney and lemon.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $14.99 
                </div>
            </div>

            {/* Samosa Chana */}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Samosa Chana </h4>
                    <p className="text-gray-600 text-sm">Samosa served with spicy chickpea curry,tamarind-cilantro chutney and yogurt topping.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $9.99 
                </div>
            </div>

            




            
            </div>
    </div>
</div>



{/* Boneless wings section */}

<div className="bg-white py-1">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 space-y-8">
      
    <hr className="border-t mx-0 border-black my-4" />

        {/* Category Title */}
        <h3 className="text-2xl  text-red-600 mb-4">Boneless Wings</h3>
        

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-9 gap-x-5">
            {/* Unsauced Roasted Boneless Wings*/}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Unsauced Roasted Boneless Wings</h4>
                    <p className="text-gray-600 text-sm">Ten pieces of Boneless wings without sauce.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $9.99 
                </div>
            </div>

            {/* Honey Chitpole Boneless Wings */}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Honey Chitpole Boneless Wings</h4>
                    <p className="text-gray-600 text-sm">Ten pieces of Boneless wings with Honey Chitpole sauce.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $12.99 
                </div>
            </div>

            {/*Garlic Parmesan Boneless Wings */}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Garlic Parmesan Boneless Wings</h4>
                    <p className="text-gray-600 text-sm">.Ten pieces of Boneless wings with Garlic Parmesan Wings </p>
                </div>
                <div className="text-gray-700 text-sm">
                    $12.99
                </div>
            </div>

            {/* BBQ Boneless Wings */}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">BBQ Boneless Wings</h4>
                    <p className="text-gray-600 text-sm">Ten pieces of Boneless wings with BBQ sauce</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $12.99
                </div>
            </div>

            {/* Buffalo Boneless Wings*/}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Buffalo Boneless Wings</h4>
                    <p className="text-gray-600 text-sm">Ten pieces of Boneless wings with Buffalo Sauce.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $12.99 
                </div>
            </div>

            {/* Hot Lemon Pepper Boneless Wings */}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Hot Lemon Pepper Boneless Wings </h4>
                    <p className="text-gray-600 text-sm">Ten pieces of Boneless wings with Hot Lemon Pepper sauce.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $12.99 
                </div>
            </div>

            </div>
    </div>
</div>


<div className="bg-white py-1">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 space-y-8">
      
    <hr className="border-t mx-0 border-black my-4" />

        {/* Category Title */}
        <h3 className="text-2xl  text-red-600 mb-4">Traditional Wings</h3>
        

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-9 gap-x-5">
            {/* Unsauced Roasted Wings*/}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Unsauced Roasted Wings</h4>
                    <p className="text-gray-600 text-sm">Eight pieces of wings without sauce.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $10.99 
                </div>
            </div>

            {/* Honey Chitpole Wings */}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Honey Chitpole Wings</h4>
                    <p className="text-gray-600 text-sm">Eight pieces of wings with Honey Chitpole sauce.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $13.99 
                </div>
            </div>

            {/*Garlic Parmesan Wings */}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Garlic Parmesan Wings</h4>
                    <p className="text-gray-600 text-sm">.Eight pieces of wings with Garlic Parmesan Wings </p>
                </div>
                <div className="text-gray-700 text-sm">
                    $13.99
                </div>
            </div>

            {/* BBQ Wings */}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">BBQ Wings</h4>
                    <p className="text-gray-600 text-sm">Eight pieces of wings with BBQ Wings</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $10.99
                </div>
            </div>

            {/* Buffalo Wings*/}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Buffalo Wings</h4>
                    <p className="text-gray-600 text-sm">Eight pieces of wings with Buffalo Wings.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $13.99 
                </div>
            </div>

            {/* Hot Lemon Pepper Wings */}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Hot Lemon Pepper Wings </h4>
                    <p className="text-gray-600 text-sm">Eight pieces of wings with Hot Lemon Pepper Wings.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $13.99 
                </div>
            </div>

            </div>
    </div>
</div>



{/* side section */}
<div className="relative bg-gray-800 mt-21 mb-0 py-13 overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-70"
          src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600" 
          
        />
        <div className="absolute inset-0 bg-black opacity-10" aria-hidden="true" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl text-white text-semibold tracking-tight sm:text-6 xl">
           SIDES
          </h2>
          
        </div>
      </div>
    </div>


<div className="bg-white py-1">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 space-y-8">
      
    

        {/* Category Title */}
        <h3 className="text-2xl  text-red-600 mb-4">Sides</h3>
        <p className="text-gray-600 mb-6">Elevate your meal with our curated array of side dishes,designed to perflectly complement.</p>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-9 gap-x-5">
            {/* Regular Fries*/}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Regular Fries</h4>
                    <p className="text-gray-600 text-sm">Crispy Golden Fries.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $6.49
                </div>
            </div>

            {/* Regular Breadsticks */}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Regular Breadsticks</h4>
                    <p className="text-gray-600 text-sm">Crispy outside,soft inside.Marinara dip included.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $5.99
                </div>
            </div>

            {/*Large Fries */}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Large Fries</h4>
                    <p className="text-gray-600 text-sm">Crispy Golden Fries.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $8.49
                </div>
            </div>

            {/* Large Breadsticks */}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800"> Large Breadsticks </h4>
                    <p className="text-gray-600 text-sm">Crispy outside,soft inside.Marinara dip included.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $8.99 
                </div>
            </div>

            {/* Jalapeno Papa Bites*/}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Jalapeno Papa Bites</h4>
                    <p className="text-gray-600 text-sm">Eight spicy bites of flavourful jalapeno,creamy alfedro sauce $ cheese.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $7.99
                </div>
            </div>

            {/* Garlic Parmesan Breadsticks */}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Garlic Parmesan Breadsticks</h4>
                    <p className="text-gray-600 text-sm">Parmeasn Cheese,instant year,salted butter and Garlic.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $7.49
                </div>
            </div>

            {/* Garlic Knots*/}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800"> Garlic Knots</h4>
                    <p className="text-gray-600 text-sm">Made with fresh dough and garlic Parmean seasoning.</p>
                </div>
                <div className="text-gray-700 text-sm ">
                    $7.99
                </div>
            </div>
            </div>
    </div>
</div>




{/* Drink section */}
<div className="relative bg-gray-800 mt-21 mb-0 py-13 overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-700"
          src="https://images.pexels.com/photos/95960/pexels-photo-95960.jpeg?auto=compress&cs=tinysrgb&w=600" 
          
        />
        <div className="absolute inset-0 bg-black opacity-10" aria-hidden="true" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl text-white text-semibold tracking-tight sm:text-6 xl">
           DRINKS
          </h2>
          
        </div>
      </div>
    </div>


<div className="bg-white py-1">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 space-y-8">
      
    <h1 className="text-3xl  text-gray-600 mt-15 mx-2 my-6 ">
 MENU
            <hr className="border-t mx-0 border-black my-4" />
          </h1>

        {/* Category Title */}
        <h3 className="text-2xl  text-red-600 mb-4">Fresh Drinks</h3>
        <p className="text-gray-600 mb-6">Cool Beverages to beat the heat.</p>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-9 gap-x-5">
            {/* Cold Tea */}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Cold Tea</h4>
                    <p className="text-gray-600 text-sm">Cardamon,ginger and allspice melted together in this delightful bevarage.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $3.49 
                </div>
            </div>

            {/* Bloody Caesar */}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Bloody Caesar</h4>
                    <p className="text-gray-600 text-sm">Clamato juice with tabasco sauce,Lemon ,salt and vodka,covered with cinnamon.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $10.99
                </div>
            </div>

            {/* Hibiscus Harmony */}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800"> Hibiscus Harmony</h4>
                    <p className="text-gray-600 text-sm"> Hibiscus tea ,lemon,rose syrup and mint mingle for uplifting vibes.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $5.99 
                </div>
            </div>

            {/* Mojito*/}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Mojito </h4>
                    <p className="text-gray-600 text-sm">Soda water,lime,white rum and mint leaves.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $10.99
                </div>
            </div>

            {/* Fresh Lemonade*/}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Fresh Lemonade</h4>
                    <p className="text-gray-600 text-sm">A medlery of fruits,lemon,mint,soda and ginger .</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $4.00 
                </div>
            </div>

            {/* Fresh Orange Juice */}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Fresh orange Juice</h4>
                    <p className="text-gray-600 text-sm">A fusion of orange juice,lemon,mint,soda and ginger.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $4.49
                </div>
            </div>

            {/* Fresh Fruit Punch */}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Fresh Fruit Punch</h4>
                    <p className="text-gray-600 text-sm">Make with fresh dough and garlic parmesan seasoning.</p>
                </div>
                <div className="text-gray-700 text-sm ">
                    $7.99
                </div>
            </div>



{/* Fresh Orange Juice */}
<div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">  Fresh Orange Juice</h4>
                    <p className="text-gray-600 text-sm">Fresh sweet mango & yogurt.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $6.99
                </div>
            </div>



          
            </div>
    </div>
</div>



    


    {/* ice-cream section */}
<div className="relative bg-gray-800 mt-21 mb-0 py-13 overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-60"
          src="https://images.pexels.com/photos/2677814/pexels-photo-2677814.jpeg?auto=compress&cs=tinysrgb&w=600" 
          
        />
        <div className="absolute inset-0 bg-black opacity-10" aria-hidden="true" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl text-white text-semibold tracking-tight sm:text-6 xl">
           ICE CREAM
          </h2>
          
        </div>
      </div>
    </div>


<div className="bg-white py-1">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 space-y-8">
      
    <h1 className="text-3xl  text-gray-600 mt-15 mx-2 my-6 ">
 MENU
            <hr className="border-t mx-0 border-black my-4" />
          </h1>

        {/* Category Title */}
        <h3 className="text-2xl  text-red-600 mb-4">Ice Cream (Single/Double Scoop)</h3>
        <p className="text-gray-600 mb-6">Indulge in frozen delights.</p>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-9 gap-x-5">
            {/* Cookies & Cream Dream */}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Cookies & Cream Dream</h4>
                    <p className="text-gray-600 text-sm">Creamy vanilla ice cream with chunks of chlocolate cookies.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $5.99
                </div>
            </div>

            {/* Vanilla Delight */}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Vanilla Delight</h4>
                    <p className="text-gray-600 text-sm">Pure indulgence in every scoop with our classic vanilla bean ice cream.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $8.99
                </div>
            </div>

            {/* Maple Pecan */}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Maple Pecan</h4>
                    <p className="text-gray-600 text-sm">Rich maple syrup infused ice cream swirled with crunchy pecan pieces.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $5.49
                </div>
            </div>

            {/* Melted Chocolate */}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Melted Chocolate </h4>
                    <p className="text-gray-600 text-sm">Decadent chocolate ice-cream with a hint of malted goodness.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $5.99
                </div>
            </div>

            {/* Caramel Cascade*/}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Caramel Cascade</h4>
                    <p className="text-gray-600 text-sm">Caramel ice cream swirled with ribbons of caramel sauce.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $9.49
                </div>
            </div>

            {/* Frosty Mint */}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Frosty Mint</h4>
                    <p className="text-gray-600 text-sm">Cool and refreshing mint ice cream for a delightful chill.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $4.49
                </div>
            </div>

            {/* Tropical Tango */}
            <div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">Tropical Tango</h4>
                    <p className="text-gray-600 text-sm">Covered with ripe bnanas,pineapple,mango and coconut milk.</p>
                </div>
                <div className="text-gray-700 text-sm ">
                    $6.57
                </div>
            </div>



{/* Berry Blast */}
<div className="flex justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">  Berry Blast</h4>
                    <p className="text-gray-600 text-sm">A refreshing blend of mixed berries,cream & vanilla.</p>
                </div>
                <div className="text-gray-700 text-sm">
                    $6.99
                </div>
            </div>



           
            </div>
    </div>
</div>



   




    </div>
    </div>
  )
}

export default Menu
