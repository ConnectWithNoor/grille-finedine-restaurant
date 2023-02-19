import { SubHeading } from '@/app/{components}';
import { data } from '@/app/{constants}';
import Image from 'next/image';

import './Laurels.css';
type Props = {
  award: {
    imgUrl: string;
    title: string;
    subtitle: string;
  };
};
const AwardCard = ({ award }: Props) => {
  return (
    <div className='app__laurels_awards-card'>
      <div className='app__laurels_awards-card_img'>
        <Image src={award.imgUrl} alt='laurel-img' fill />
      </div>
      <div className='app_laurels_awards-card_content'>
        <p className='p__cormorant' style={{ color: '#DCCA87' }}>
          {award.title}
        </p>
        <p className='p__cormorant'>{award.subtitle}</p>
      </div>
    </div>
  );
};

const Laurels = () => (
  <section className='app__bg  section__padding app__laurels' id='awards'>
    {/* logo absolute */}
    <div className='app_wrapper-logo'>
      <Image src='/logo.png' fill alt='logo' />
    </div>

    <div className='app__wrapper app_laurel__container'>
      {/* left */}
      <div className='app__wrapper_info'>
        <SubHeading title='Awards & recognition' />
        <h1 className='headtext__cormorant'>Our Laurels</h1>

        {/* laurels container */}
        <div className='app__laurels_awards'>
          {data.awards.map((award, index) => (
            <AwardCard award={award} key={award.title + index} />
          ))}
        </div>
      </div>
      {/* right */}
      <div className='app__wrapper_img'>
        <div className='app__wrapper_img-container'>
          <Image src={'/laurels.png'} alt='laurel-img' fill />
        </div>
      </div>
    </div>
  </section>
);

export default Laurels;
