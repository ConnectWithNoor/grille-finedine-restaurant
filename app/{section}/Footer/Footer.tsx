import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '@/app/{components}';
import './Footer.css';

const Footer = () => (
  <section className='app__footer section__padding' id='footer'>
    <FooterOverlay />
    <Newsletter />
  </section>
);

export default Footer;
