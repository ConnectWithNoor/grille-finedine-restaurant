import { SubHeading } from '../../{components}';
import React from 'react';

import './Header.css';
import Image from 'next/image';

const Header = () => (
  <header className='app__header app__wrapper section__padding' id='home'>
    {/* left child */}
    <div className='app__wrapper_info'>
      <SubHeading title='Chase the new flavor.' />
      <h1 className='app__header-h1'>The key to fine Dining</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
        morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
        tellus{' '}
      </p>
      <button type='button' className='custom__button'>
        Explore Menu
      </button>
    </div>
    {/* right child */}
    <div className='app__wrapper_img'>
      <div className='app__wrapper_img-container'>
        <Image src={'/welcome.png'} alt='welcome' fill />
      </div>
    </div>
  </header>
);

export default Header;
