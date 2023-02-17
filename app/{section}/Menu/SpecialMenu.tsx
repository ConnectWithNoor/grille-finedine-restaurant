import Image from 'next/image';
import React from 'react';
import { SubHeading, MenuItem } from '../../{components}';

import { data } from '../../{constants}';

import './SpecialMenu.css';

const SpecialMenu = () => (
  <section className='app__specialMenu flex__center section__padding' id='menu'>
    {/* title */}
    <div className='app__specialMenu-title'>
      <SubHeading title='Menu that fits palatte' width />
      <h1 className='headtext__cormorant'>Today&apos;s Special</h1>
    </div>

    {/* parent flex container */}

    <div className='app__specialMenu-menu'>
      {/* left */}

      <div className='app__specialMenu-menu_wine flex__center'>
        <p className='app__specialMenu_menu_heading'> Wine & Beer</p>
        <div className='app__specialMenu_menu_items'>
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>

      {/* middle */}
      <div className='app__specialMenu-menu_img'>
        <Image src={'/menu.png'} alt='menu' fill />
      </div>
      {/* right */}

      <div className='app__specialMenu-menu_cocktails flex__center'>
        <p className='app__specialMenu_menu_heading'> Cocktails</p>
        <div className='app__specialMenu_menu_items'>
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>

    {/* button */}
    <div style={{ marginTop: '1rem' }}>
      <button type='button' className='custom__button'>
        View More
      </button>
    </div>
  </section>
);

export default SpecialMenu;
