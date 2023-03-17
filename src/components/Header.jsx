import React from 'react';

const Header = () => {
  return (
    <>
      <nav className="main-header-menu">
        <section
          style={{
            display: 'flex',
            padding: '30px',
            fontFamily: 'helvetica',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
          }}
        >
          <div className="px-3 py-2 font-medium hover:font-bold text-xl">
            <a href="#">About Me</a>
          </div>
          <div className="px-3 py-2 font-medium hover:font-bold text-xl">
            <a href="#">Portfolio</a>
          </div>
          <div className="px-3 py-2 font-medium hover:font-bold text-xl">
            <a href="#">Resume</a>
          </div>
          <div className="px-3 py-2 font-medium hover:font-bold text-xl">
            <a href="#">Contact</a>
          </div>
        </section>
      </nav>
      <div>
        <button className='btn btn-sm'>click</button>
      </div>
    </>
  )
}

export default Header;