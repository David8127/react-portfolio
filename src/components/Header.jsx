import { Link } from "react-router-dom";

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
            <Link to="/">About Me</Link>
          </div>
          <div className="px-3 py-2 font-medium hover:font-bold text-xl">
            <Link to="portfolio">Portfolio</Link>
          </div>
          <div className="px-3 py-2 font-medium hover:font-bold text-xl">
            <Link to="resume">Resume</Link>
          </div>
          <div className="px-3 py-2 font-medium hover:font-bold text-xl">
            <Link to="contact">Contact</Link>
          </div>
        </section>
      </nav>
    </>
  )
}

export default Header;