import { Link } from 'react-router-dom';
import icon from '../../assets/logo.svg';
import { AiOutlineInstagram } from 'react-icons/ai';
import { SlSocialDribbble } from 'react-icons/sl';
import { BsTwitter, BsYoutube, BsApple, BsGooglePlay } from 'react-icons/bs';
import '../../styles/footer.css';

const Footer = () => {
  const size = 30;
  const sizeSocial = 22;

  const pageUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className='flex-col' id='footer'>
      <div className='flex footer-head'>
        <div className='footer-head-text'>
          <h1>Download our mobile app ⚡</h1>
          <p>
            Get exclusive rentals to car rentals with our mobile app. Download
            now and experience convenience on the go.
          </p>
        </div>
        <div className='footer-head-icons  flex'>
          <div className='flex'>
            <span>
              <BsApple size={size} />
            </span>

            <span>
              <p>Download on the</p>
              <h2>App Store</h2>
            </span>
          </div>
          <div className='flex'>
            <span>
              <BsGooglePlay size={size} />
            </span>
            <span>
              <p>Get it on</p>
              <h2>Google Play</h2>
            </span>
          </div>
        </div>
      </div>
      <div className='line'></div>
      <div className='bottom-footer flex'>
        <div className='footer-logo'>
          <img src={icon} alt='icon' />
        </div>
        <div className='footer-links  '>
          <ul className='flex'>
            <li>
              <Link
                to='/'
                onClick={() => {
                  pageUp();
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/rent'
                onClick={() => {
                  pageUp();
                }}
              >
                Rent
              </Link>
            </li>
            <li>
              <Link
                to='/about'
                onClick={() => {
                  pageUp();
                }}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to='/contact'
                onClick={() => {
                  pageUp();
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className='footer-icons flex'>
          <span className='flex'>
            <AiOutlineInstagram size={sizeSocial} />
          </span>
          <span className='flex'>
            <SlSocialDribbble size={sizeSocial} />
          </span>
          <span className='flex'>
            <BsTwitter size={sizeSocial} />
          </span>
          <span className='flex'>
            <BsYoutube size={sizeSocial} />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
