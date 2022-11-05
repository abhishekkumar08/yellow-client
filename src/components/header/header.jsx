import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './header.css';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  const user = localStorage.getItem('userName');
  const handleClick = () => {
    localStorage.clear();
    window.location.href = '/';
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        fontSize: '1.5rem',
        color: '#fff',
        height: '10vh',
        textDecoration: 'none',
        pointer: 'cursor',
      }}
    >
      <nav>
        {(toggleMenu || screenWidth > 600) && (
          <ul className="list">
            <li className="items">
              <Link to="/">Home</Link>
            </li>
            {user ? (
              <>
                <li className="items">{`Hello "${user}"`}</li>

                <li className="items" onClick={handleClick}>
                  Logout
                </li>
              </>
            ) : (
              <>
                <li className="items">
                  <Link to="/login">Login</Link>
                </li>
                <li className="items">
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        )}
        <button onClick={toggleNav} className="ham">
          <b>=</b>
        </button>
      </nav>
    </div>
  );
};

export default Header;
