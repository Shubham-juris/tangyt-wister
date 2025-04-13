
// import React from 'react'
// import { NavLink } from 'react-router-dom'

// const Footer = () => {
//   return (
//     <div>
//       <div>
//       <div className="py-16  bg-black">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Left Column: Contact Information */}
//         <div className="bg-black p-8 rounded-lg shadow-md">
//           <h2 className="text-2xl font-bold text-white mb-6">VISIT US</h2>
//           <div className="mb-6">
//             <h3 className="text-lg font-semibold text-white mb-2">
//               Special Requests?
//             </h3>
//             <p className="text-gray-400 leading-relaxed">
//               Do you have dietary concerns? Questions about an upcoming event?
//               Drop us a line, and we'll get back to you soon.
//             </p>
//           </div>
//           <div className="mb-6">
//             <h3 className="text-lg font-semibold text-white mb-2">
//               Tangy Twisters
//             </h3>
//             <p className="text-gray-400 leading-relaxed mb-2">
//               21 Beju Industrial Drive, Unit 4, Sylvan Lake, AB T4S 2J7
//             </p>
//             <p className="text-red-600 hover:underline mb-1">
//               <a href="mailto:tangytwisters.resto@gmail.com">
//                 tangytwisters.resto@gmail.com
//               </a>
//             </p>
//             <p className="text-red-600 hover:underline">
//               Phone: <a href="tel:+1-587-839-7115">+1-587-839-7115</a>
//             </p>
//           </div>
//           <div className="mb-6">
//             <h3 className="text-lg font-semibold text-white mb-2">Hours</h3>
//             <p className="text-gray-400 leading-relaxed">
//               Open today: <span className="font-semibold">09:00 a.m. - 05:00 p.m.</span>
//             </p>
//             {/* You could add a dropdown or more detailed hours information here */}
//           </div>
//           <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-3xl">
//             Contact Us
//           </button>
//         </div>

//         {/* Right Column: Google Map (Placeholder) */}
//         <div className="rounded-lg shadow-md overflow-hidden">
//           {/* Replace this with your actual Google Maps embed or a map component */}
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2372.683227788778!2d-114.1199786841787!3d52.38372737995414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53052b2b93199443%3A0x245493020161414a!2s21%20Beju%20Industrial%20Dr%20Unit%204%2C%20Sylvan%20Lake%2C%20AB%20T4S%202J7!5e0!3m2!1sen!2sca!4v1680777600000!5m2!1sen!2sca"
//             width="100%"
//             height="450" // Adjust height as needed
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//             title="Tangy Twisters Location"
//           ></iframe>
//           <div className="bg-black p-4 text-center">
//             <a
//               href="https://www.google.com/maps/place/21+Beju+Industrial+Dr+Unit+4,+Sylvan+Lake,+AB+T4S+2J7/@52.3837274,-114.1199787,17z/data=!3m1!4b1!4m6!3m5!1s0x53052b2b93199443:0x245493020161414a!8m2!3d52.3837274!4d-114.1199787!16s%2Fg%2F11v10b4h1w"
//               className="inline-flex items-center bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-3xl"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <svg
//                 className="w-5 h-5 mr-2"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M3 12l2-2m0 0l7-7 7 7m0 0l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0H6a1 1 0 01-1-1v-5l4 4 1-1m-1-9l2 2 4-4-7-7-7 7m7 2v6"
//                 ></path>
//               </svg>
//               Get directions
//             </a>
//           </div>
//         </div>
//       </div>



//       <div className="bg-black text-gray-400 py-12">
      

//         {/* Copyright */}
//         <div className="border-t border-gray-700 py-4">
//           <p className="text-sm text-center">
//             Copyright © 2024 Tangy Twisters - All Rights Reserved.
//           </p>
//         </div>

//         {/* Bottom Navigation */}
//         <nav className="mt-6 sm:text-center">
//           <ul className="flex justify-center space-x-1 text-sm">
//             <li><NavLink to="/" className="hover:text-gray-300">Home</NavLink></li>
//             <li><NavLink to="/about" className="hover:text-gray-300">About</NavLink ></li>
//             <li><NavLink to="/menu" className="hover:text-gray-300">Menu</NavLink></li>
//             <li><NavLink to="/reservation" className="hover:text-gray-300">Reservations</NavLink ></li>
//             <li><NavLink to="/gallery" className="hover:text-gray-300">Gallery</NavLink ></li>
//             <li><NavLink to="/contact" className="hover:text-gray-300">Contact</NavLink ></li>
//           </ul>
//         </nav>
//       </div>
//     </div>
//     </div>
//     </div>
//   )
// }

// export default Footer
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion'; // For animations

const Footer = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';
  const isMenuPage = location.pathname === '/menu';
  const isContactPage = location.pathname === '/contact';
  const isReservationPage = location.pathname === '/reservation';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  return (
    <motion.footer
      variants={footerVariants}
      initial="initial"
      animate="animate"
      className="bg-black text-gray-400"
    >
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Contact Information */}
          <div className="bg-black p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-white mb-4 md:mb-6 tracking-wider">
              VISIT US
            </h2>
            <div className="mb-4 md:mb-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                Special Requests?
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Do you have dietary concerns? Questions about an upcoming event?
                Drop us a line, and we'll get back to you soon.
              </p>
            </div>
            <div className="mb-4 md:mb-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                Tangy Twisters
              </h3>
              <p className="text-gray-300 leading-relaxed mb-2 text-sm md:text-base">
                21 Beju Industrial Drive, Unit 4, Sylvan Lake, AB T4S 2J7
              </p>
              <p className="text-red-500 hover:text-red-400 hover:underline mb-1 text-sm md:text-base">
                <a href="mailto:tangytwisters.resto@gmail.com">
                  tangytwisters.resto@gmail.com
                </a>
              </p>
              <p className="text-red-500 hover:text-red-400 hover:underline text-sm md:text-base">
                Phone: <a href="tel:+1-587-839-7115">+1-587-839-7115</a>
              </p>
            </div>
            <div className="mb-4 md:mb-6">
              <h3 className="text-lg font-semibold text-white mb-2">Hours</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Open today:{' '}
                <span className="font-semibold text-gray-200">
                  09:00 a.m. - 05:00 p.m.
                </span>
              </p>
              {/* You could add a dropdown or more detailed hours information here */}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-500 cursor-pointer hover:bg-red-400 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300"
            >
              Contact Us
            </motion.button>
          </div>

          {/* Right Column: Dynamic Content (Map or Image) */}
          <div className="rounded-lg h-80 shadow-md overflow-hidden">
            {isAboutPage || isMenuPage || isContactPage || isReservationPage ? (
              <img
                src="image2.jpg" // Replace with a relevant image
                alt="Restaurant Interior"
                className="w-full h-full object-cover"
              />
            ) : (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2372.683227788778!2d-114.1199786841787!3d52.38372737995414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53052b2b93199443%3A0x245493020161414a!2s21%20Beju%20Industrial%20Dr%20Unit%204%2C%20Sylvan%20Lake%2C%20AB%20T4S%202J7!5e0!3m2!1sen!2sca!4v1680777600000!5m2!1sen!2sca" // Replace with your actual Google Maps embed
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tangy Twisters Location"
              ></iframe>
            )}
            {!isAboutPage && !isMenuPage && !isContactPage && !isReservationPage && (
              <div className="bg-black p-4 text-center">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.google.com/maps/place/21+Beju+Industrial+Dr+Unit+4,+Sylvan+Lake,+AB+T4S+2J7/@52.3837274,-114.1199787,17z/data=!3m1!4b1!4m6!3m5!1s0x53052b2b93199443:0x245493020161414a!8m2!3d52.3837274!4d-114.1199787!16s%2Fg%2F11v10b4h1w" // Replace with your actual Google Maps directions link
                  className="inline-flex items-center bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7m0 0l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0H6a1 1 0 01-1-1v-5l4 4 1-1m-1-9l2 2 4-4-7-7-7 7m7 2v6"
                    ></path>
                  </svg>
                  Get directions
                </motion.a>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="py-8 border-t border-gray-700">
        {/* Copyright */}
        <div className="py-4">
          <p className="text-sm text-center text-gray-300">
            Copyright © 2024 Tangy Twisters - All Rights Reserved.
          </p>
        </div>

        {/* Bottom Navigation */}
        <nav className="mt-6 sm:text-center">
          <ul className="flex justify-center space-x-1 text-sm">
            <li>
              <NavLink
                to="/"
                className="hover:text-gray-200 transition-colors duration-300"
                onClick={scrollToTop}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="hover:text-gray-200 transition-colors duration-300"
                onClick={scrollToTop}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                className="hover:text-gray-200 transition-colors duration-300"
                onClick={scrollToTop}
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/reservation"
                className="hover:text-gray-200 transition-colors duration-300"
                onClick={scrollToTop}
              >
                Reservations
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className="hover:text-gray-200 transition-colors duration-300"
                onClick={scrollToTop}
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="hover:text-gray-200 transition-colors duration-300"
                onClick={scrollToTop}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </motion.footer>
  );
};

export default Footer;