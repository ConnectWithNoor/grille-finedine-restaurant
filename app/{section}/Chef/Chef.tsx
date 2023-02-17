import { SubHeading } from '@/app/{components}';
import Image from 'next/image';
import React from 'react';

import './Chef.css';

const Chef = () => (
  <section className='app__bg app__wrapper section__padding' id='chef'>
    {/* left */}
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <div className='app__wrapper_img-container'>
        <Image src={'/chef.png'} alt='chef-img' fill />
      </div>
    </div>

    {/* right */}

    <div className='app__wrapper_info'>
      <SubHeading title={`Chef's Word`} />
      <h1 className='headtext__cormorant'>What we believe in </h1>

      <div className='app__chef-content'>
        {/* quote and first text line */}
        <div className='app__chef-content_quote'>
          <div className='app__chef-content_quote-img'>
            <Image src={'/quote.png'} alt='chef-quote' fill />
          </div>
          <p className='p__opensans'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
          </p>
        </div>

        {/* rest of text */}
        <p className='p__opensans'>
          auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
          Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
          lectus eu. Congue iaculis integer curabitur semper sit nunc.
        </p>
      </div>

      {/* chef sign */}
      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>

        <div className='app__chef-sign-img'>
          <Image src={'/sign.png'} alt='chef-sign' fill />
        </div>
      </div>
    </div>
  </section>
);

export default Chef;
