import React from 'react'

function About() {
  return (
    <div className='flex flex-col items-center justify-center mx-9'>
      <div className="avatar">
        <div className="w-24 rounded-3xl">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <h1 className="">Hello Everyone!</h1>
      <p className="">
        My name is David Martin and I am a full stack web developer. I have a background in biochemistry, and recieved my bachelors of science
        from UCSD in 2018.
      </p>
    </div>
  )
}

export default About;
