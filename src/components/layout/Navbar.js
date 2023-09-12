import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import '../../styles/Navbar.css';

const Navbar = () => {
  const [view, setView] = useState(false);

  return (
    <>
      <nav>
        <span onClick={() => setView(!view)}>
          <GiHamburgerMenu size={30} />
        </span>
        <img src={logo} alt='logo' />
        <div>Login / Signup</div>
      </nav>

      <div className={`nav-links ${view ? 'nav-show' : 'nav-hide'}`}>
        <ul className='flex-col'>
          <li>
            <Link onClick={() => setView(false)} to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link onClick={() => setView(false)} to='/rent'>
              Rent
            </Link>
          </li>
          <li>
            <Link onClick={() => setView(false)} to='/about'>
              About Us
            </Link>
          </li>
          <li>
            <Link onClick={() => setView(false)} to='/contact'>
              Contact
            </Link>
          </li>
          <li>
            <Link onClick={() => setView(false)} to='/'>
              Login / Signup
            </Link>
          </li>
        </ul>
        <AiOutlineClose
          className='nav-close'
          onClick={() => setView(false)}
          size={35}
        />
      </div>
    </>
  );
};

export default Navbar;
