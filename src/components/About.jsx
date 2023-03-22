import React from 'react'
import selfie from '../assets/Selfie.png';

export default function About() {
  return (
    <div className='flex flex-col space-y-5 items-center justify-center mx-9 py-10'>
      <div className="avatar">
        <div className="rounded-xl ring ring-teal-700 ring-offset-base-100 ring-offset-2" style={{ height: "28vh", width: "13vw" }}>
          <img src={selfie} alt="selfie"></img>
        </div>
      </div>
      <div className="text-3xl font-semibold p-1">
      <h1>Hello Everyone!</h1>
      </div>
      <p className="text-xl py-1" style={{ width: "50vw", height: "30vh" }}>
        My name is <span className="font-bold">David Martin</span> and I am a MERN stack web developer. I am currently enrolled in the full stack coding bootcamp at UCI. I have an educational background
        in biochemistry, earning my degree from UCSD in 2018. After exploring web development on my own, I found myself excited and intrigued about the tech world, and took steps to follow these passions.
        Thanks to the bootcamp I now have experience using a multitude of languages and technologies including CSS, HTML, Javascript, MySQL, Express.js, React, and more.
      </p>
    </div>
  )
}

