import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [activeTab, setActiveTab] = useState("/");
  const location = useLocation();

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);

  return (
    <div>
      <nav className="tabs tabs-boxed">
        <section
          style={{
            display: 'flex',
            position: "flex-end",
            padding: '20px',
            justifyContent: "flex-end",
          }}
        >
          <div
            className={`px-3 py-2 tab tab-lg tab-lifted text-xl about ${
              activeTab === "/" ? "tab-active" : ""
            }`}
            onClick={() => setActiveTab("/")}
          >
            <Link to="/">About Me</Link>
          </div>
          <div
            className={`px-3 py-2 tab tab-lg tab-lifted text-xl portfolio ${
              activeTab === "/portfolio" ? "tab-active" : ""
            }`}
            onClick={() => setActiveTab("/portfolio")}
          >
            <Link to="/portfolio">Portfolio</Link>
          </div>
          <div
            className={`px-3 py-2 tab tab-lg tab-lifted text-xl resume ${
              activeTab === "/resume" ? "tab-active" : ""
            }`}
            onClick={() => setActiveTab("/resume")}
          >
            <Link to="/resume">Resume</Link>
          </div>
          <div
            className={`px-3 py-2 tab tab-lg tab-lifted text-xl contact ${
              activeTab === "/contact" ? "tab-active" : ""
            }`}
            onClick={() => setActiveTab("/contact")}
          >
            <Link to="/contact">Contact</Link>
          </div>
        </section>
      </nav>
    </div>
  )
}

export default Header;