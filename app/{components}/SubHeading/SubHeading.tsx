import Image from 'next/image';
import React from 'react';

type Props = {
  title: string;
};

const SubHeading = ({ title }: Props) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className='p__cormorant'>{title}</p>
    <div style={{ width: '5rem', height: '1rem', position: 'relative' }}>
      <Image src={'/spoon.svg'} alt='subheading-img' fill />
    </div>
  </div>
);

export default SubHeading;
