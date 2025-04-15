
// import React from 'react'
// import { Link } from 'react-router-dom'

// const Contactus = () => {
//   return (
//     <div>
//       {/* section1 */}

// <div className="relative bg-gray-800 mt-15 mb-0 py-13 overflow-hidden">
//       <div className="absolute inset-0">
//         <img
//           className="w-full h-full object-cover opacity-70"
//           src="https://images.pexels.com/photos/3682838/pexels-photo-3682838.jpeg?auto=compress&cs=tinysrgb&w=600" 
          
//         />
//         <div className="absolute inset-0 bg-black opacity-10" aria-hidden="true" />
//       </div>
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center">
//           <Link to='/contact'>
//           <h2 className="text-5xl text-white text-semibold tracking-tight sm:text-6 xl">
//            CONTACT US
//           </h2>
          
//           </Link>
          
//         </div>
//       </div>
//     </div>



// {/* section2 */}
//       <div className="bg-gray-100 py-12">
//       <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Contact Title */}
//         <h2 className="text-3xl font-semibold text-red-600 mb-6 text-center">
//           Contact Tangy Twisters
//         </h2>

//         {/* Message */}
//         <p className="text-gray-700 mb-8 text-center">Send us a message!</p>

//         {/* Contact Form */}
//         <form className="space-y-4">
//           <div>
//             <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             />
//           </div>

//           <div>
//             <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
//               Email*
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
//               How can we serve you?
//             </label>
//             <textarea
//               id="message"
//               rows="4"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             ></textarea>
//           </div>

//           {/* Send Button */}
//           <div className="text-center">
//             <button
//               type="submit"
//               className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline"
//             >
//               Send
//             </button>
//           </div>
//         </form>

//         {/* reCAPTCHA Disclaimer */}
//         <p className="text-xs text-gray-500 mt-8 mb-10 text-center">
//           This site is protected by reCAPTCHA and the Google{' '}
//           <a
//             href="https://policies.google.com/privacy"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="underline"
//           >
//             Privacy Policy
//           </a>{' '}
//           and{' '}
//           <a
//             href="https://policies.google.com/terms"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="underline"
//           >
//             Terms of Service
//           </a>{' '}
//           apply.
//         </p>
//       </div>
//     </div>
//     </div>
    
//   )
// }

// export default Contactus
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Contactus = () => {
  return (
    <div>
      {/* Section 1 - Banner */}
      <motion.div
        className="relative bg-gray-800 mt-15 mb-0 py-13 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-70"
            src="https://images.pexels.com/photos/3682838/pexels-photo-3682838.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Contact banner"
          />
          <div className="absolute inset-0 bg-black opacity-10" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link to="/contact">
              <motion.h2
                className="text-5xl text-white font-semibold tracking-tight sm:text-6xl"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                CONTACT US
              </motion.h2>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Section 2 - Contact Form */}
      <motion.div
        className="bg-gray-100 py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <motion.h2
            className="text-3xl font-semibold text-red-600 mb-6 text-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Contact Tangy Twisters
          </motion.h2>

          <motion.p
            className="text-gray-700 mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Send us a message!
          </motion.p>

          {/* Form */}
          <motion.form
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {},
            }}
          >
            {[
              { id: 'name', type: 'text', label: 'Name' },
              { id: 'email', type: 'email', label: 'Email*', required: true },
            ].map((field) => (
              <motion.div
                key={field.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <label htmlFor={field.id} className="block text-gray-700 text-sm font-bold mb-2">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.id}
                  required={field.required}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </motion.div>
            ))}

            {/* Textarea */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                How can we serve you?
              </label>
              <textarea
                id="message"
                rows="4"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ></textarea>
            </motion.div>

            {/* Send Button */}
            <motion.div
              className="text-center"
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline"
              >
                Send
              </button>
            </motion.div>
          </motion.form>

          {/* Disclaimer */}
          <motion.p
            className="text-xs text-gray-500 mt-8 mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
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
          </motion.p>
        </div>
      </motion.div>
    </div>
  )
}

export default Contactus

