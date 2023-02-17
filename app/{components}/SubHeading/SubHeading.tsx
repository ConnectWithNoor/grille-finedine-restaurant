import Image from 'next/image';
import React from 'react';

type Props = {
  title: string;
  width?: boolean;
};

const SubHeading = ({ title, width = false }: Props) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className='p__cormorant'>{title}</p>
    <div className={`spoon__img ${width && 'w-100'}`}>
      <Image src={'/spoon.svg'} alt='subheading-img' fill />
    </div>
  </div>
);

export default SubHeading;
