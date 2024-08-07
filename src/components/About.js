import React from 'react'
import { APP_URL } from '../utils/constants';

// about us page
const About = () => {
  return (
    <div>
      <h2 className='font-extrabold text-4xl mt-10 mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
  About <span className='text-red-500 decoration-wavy decoration-2'>Us</span>
</h2>
<div className='flex justify-around text-center items-center mt-24 mb-28 m-auto w-3/4 lg:w-auto lg:px-5 md:w-auto md:px-4 sm:w-auto sm:px-3 min-[320px]:w-auto min-[320px]:px-2 sm:flex-row min-[320px]:flex-col'>
        <div className='text-green-500 mt-10 w-[60%] md:w-[60%] sm:w-[70%] min-[320px]:w-[100%] mb-10'>
          <h3 className='text-6xl lg:text-5xl sm:text-3xl min-[320px]:text-2xl mb-5 font-bold'>
            Welcome to <span className='text-red-400'>Crave Wave</span>
          </h3> 
          <p className='text-base lg:text-base sm:text-sm min-[320px]:text-sm text-black font-medium'>
            At Crave Wave, we believe that great food and exceptional service go hand in hand. Our restaurant is a cozy and inviting 
            space where you can relax and enjoy a memorable dining experience. Whether you're joining us for a quick bite or a leisurely meal,
            our dedicated team is committed to providing you with outstanding service and delicious food.
          </p>
        </div>
        {/* burger img */}
        <div className='w-[25%] lg:w-[25%] md:w-[35%] sm:w-[40%] min-[420px]:w-[50%] min-[320px]:w-[55%]'>
          <img className='w-auto' src={APP_URL} alt='burger-img'></img>
        </div>
      </div>

      {/* About Me Section */}
      <div className='text-center mt-24 mb-28 m-auto w-3/4 lg:w-auto lg:px-5 md:w-auto md:px-4 sm:w-auto sm:px-3 min-[320px]:w-auto min-[320px]:px-2'>
        <h3 className='text-4xl lg:text-3xl sm:text-2xl min-[320px]:text-xl mb-5 font-bold text-blue-500'>
          About the Developer
        </h3>
        <p className='text-base lg:text-base sm:text-sm min-[320px]:text-sm text-black font-medium'>
          Hello! I'm Aman Upadhyay, a third-year B.Tech student with a passion for technology and innovation. I am currently designing the Crave Wave app using React.js, aiming to enhance your food ordering experience with a user-friendly and efficient interface. Thank you for supporting our journey!
        </p>
      </div>
    </div>
  )
}

export default About;
