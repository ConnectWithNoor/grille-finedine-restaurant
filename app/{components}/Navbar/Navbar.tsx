import Image from 'next/image';
import Link from 'next/link';

import './Navbar.css';
import NavbarMobile from './navbarMobile';

const Navbar = () => {
  return (
    <nav className='app__navbar'>
      {/* logo image */}
      <div className='app__navbar-logo'>
        <Image src='/gericht.png' alt='logo' fill />
      </div>
      {/* nav menu */}
      <ul className='app__navbar-links'>
        <li className='p__opensans'>
          <Link href='#home'>Home</Link>
        </li>

        <li className='p__opensans'>
          <Link href='#about'>About</Link>
        </li>

        <li className='p__opensans'>
          <Link href='#menu'>Menu</Link>
        </li>

        <li className='p__opensans'>
          <Link href='#awards'>Awards</Link>
        </li>

        <li className='p__opensans'>
          <Link href='#contact'>Contact</Link>
        </li>
      </ul>

      {/* login */}
      <div className='app__navbar-login'>
        <Link href='#login' className='p__opensans'>
          Log In / Register
        </Link>
        <div />
        <Link href='#book' className='p__opensans'>
          Book Table
        </Link>
      </div>

      {/* mobile navbar burgermenu */}
      <NavbarMobile />
    </nav>
  );
};

export default Navbar;
