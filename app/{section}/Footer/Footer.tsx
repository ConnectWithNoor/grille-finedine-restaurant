import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '@/app/{components}';
import './Footer.css';
import Image from 'next/image';

const Footer = () => (
  <section className='app__footer section__padding' id='footer'>
    <FooterOverlay />
    <Newsletter />

    <footer className='app__footer-links'>
      {/* left */}
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>9 W 53rd St, New York, NY 10019, USA</p>
        <p className='p__opensans'>+1 212-344-1230</p>
        <p className='p__opensans'>+1 212-555-1230</p>
      </div>
      {/* middle */}
      <div className='app__footer-links_logo'>
        <div className='app__footer-links_logo-container'>
          <Image src='/gericht.png' alt='footer-logo' fill />
        </div>
        <p className='p__opensans'>
          The best way to find yourself is to lose yourself in the service of
          others.
        </p>
        <div className={`spoon__img w-100`} style={{ marginTop: '15px' }}>
          <Image src={'/spoon.svg'} alt='subheading-img' fill />
        </div>
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      {/* right */}
      <div className='app__footer-links-work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday-Friday:</p>
        <p className='p__opensans'>08:00 am - 12:00 am</p>
        <p className='p__opensans'>Saturday-Sunday:</p>
        <p className='p__opensans'>07:00 am - 11:00 pm</p>
      </div>
    </footer>

    <div className='footer__copyright'>
      <p className='p__opensans'>
        {new Date().getFullYear().toString()} Gerícht. All Rights reserved.
      </p>
    </div>
  </section>
);

export default Footer;
