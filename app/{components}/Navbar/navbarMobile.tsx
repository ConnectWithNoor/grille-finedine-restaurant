'use client';
import { useState } from 'react';
import Link from 'next/link';

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import './Navbar.css';

function NavbarMobile() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='app__navbar-smallscreen'>
      <div className='app__navbar-smallscreen-icon'>
        <GiHamburgerMenu
          color='#fff'
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
      </div>

      {/* mobile navbar overlay */}

      {toggleMenu && (
        <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
          <MdOutlineRestaurantMenu
            fontSize={27}
            className='overlay__close'
            onClick={() => setToggleMenu(false)}
          />

          <ul className='app__navbar-smallscreen-links'>
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
        </div>
      )}
    </div>
  );
}

export default NavbarMobile;
