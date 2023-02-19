'use client';

import { useRef } from 'react';
import Image from 'next/image';
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from 'react-icons/bs';

import { SubHeading } from '@/app/{components}';
import { data } from '@/app/{constants}';

import './Gallery.css';

const images = [
  '/gallery01.png',
  '/gallery02.png',
  '/gallery03.png',
  '/gallery04.png',
];

const Gallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current!.scrollLeft != undefined) {
      if (direction === 'left') {
        scrollRef.current!.scrollLeft -= 300;
      } else {
        scrollRef.current!.scrollLeft += 300;
      }
    }
  };

  return (
    <section className='app__gallery flex__center' id='gallery'>
      {/* left */}
      <div className='app__gallery-content'>
        <SubHeading title='Instagram' />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{ color: '#AAA', marginTop: '2rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button className='custom__button' type='button'>
          View More
        </button>
      </div>
      {/* right */}
      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {images.map((image, index) => (
            <div
              key={image + index}
              className='app__gallery-images_card flex__center'
            >
              <div className='app__gallery-images_card-container'>
                <Image src={image} fill alt='gallery-img' />
                <BsInstagram className='gallery__image-icon' />
              </div>
            </div>
          ))}
        </div>
        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort
            className='gallery__arrow-icon'
            onClick={() => handleScroll('left')}
          />
          <BsArrowRightShort
            className='gallery__arrow-icon'
            onClick={() => handleScroll('right')}
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
