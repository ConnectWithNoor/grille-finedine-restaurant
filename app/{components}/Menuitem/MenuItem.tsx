import React from 'react';

import './MenuItem.css';

type Props = {
  title: string;
  price: string;
  tags: string;
};

const MenuItem = ({ title, price, tags }: Props) => (
  <div className='app__menuitem'>
    <div className='app__menuitem-head'>
      {/* item name */}
      <div className='app__menuitem-name'>
        <p className='p__cormorant' style={{ color: '#DCCA87' }}>
          {title}
        </p>
      </div>

      {/* item dash */}
      <div className='app__menuitem-dash' />

      {/* item price */}
      <div className='app__menuitem-price'>
        <p className='p__cormorant'>{price}</p>
      </div>
    </div>

    {/* small text */}
    <div className='app__menuitem-sub'>
      <p className='p__opensans' style={{ color: '#AAA' }}>
        {tags}
      </p>
    </div>
  </div>
);

export default MenuItem;
