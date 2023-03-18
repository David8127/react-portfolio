import React from 'react'
// import selfie from '../assets/selfie.JPG';

function About() {
  return (
    <div className='flex flex-col space-y-5 items-center justify-center mx-9'>
      <div className="avatar">
        <div className="w-24 rounded-3xl">
          {/* <img  /> */}
        </div>
      </div>
      <h1 className="text-3xl p-2">Hello Everyone!</h1>
      <p className="text-xl py-2 w-3/5">
        My name is <span className="font-bold">David Martin</span> and I am a full stack web developer. I am currently enrolled in the MERN stack coding bootcamp at UCI. I have an educational background
        in biochemistry, earning my degree from UCSD in 2018. After exploring web development on my own, I found myself excited and intrigued about the tech world, and
        decided to shift my career goals to fit these passions. I now have experience using different languages and technologies including CSS, HTML, Javascript, MySQL, Express.js, and React.
      </p>
    </div>
  )
}

export default About;
