import Image from 'next/image';
import React from 'react';

import './AboutUs.css';

const AboutUs = () => (
  <div
    className='app__aboutus app__bg flex__center section__padding'
    id='about'
  >
    {/* bg */}
    <div className='app__aboutus-overlay flex__center'>
      <div className='app__aboutus-overlay__img-container'>
        <Image src={'/G.png'} alt='G' fill />
      </div>
    </div>
    <div className='app__aboutus-content flex__center'>
      {/* left */}
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <div className='spoon__img'>
          <Image src='/spoon.svg' alt='spoon__about' fill />
        </div>
        <p className='p__opensans'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button type='button' className='custom__button'>
          Know More
        </button>
      </div>
      {/* middle */}
      <div className='app__aboutus-content_knife flex__center'>
        <Image src='/knife.png' alt='knife__about' fill />
      </div>

      {/* right */}
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <div className='spoon__img'>
          <Image src='/spoon.svg' alt='spoon__about' fill />
        </div>
        <p className='p__opensans'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button type='button' className='custom__button'>
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
