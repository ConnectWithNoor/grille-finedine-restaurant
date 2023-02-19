import { SubHeading } from '@/app/{components}';
import { data } from '@/app/{constants}';
import Image from 'next/image';

const FindUs = () => (
  <section className='app__bg app__wrapper section__padding' id='contact'>
    {/* left */}
    <div className='app__wrapper_info'>
      <SubHeading title='Contact' />
      <h1 className='headtext__cormorant' style={{ marginBottom: '3rem' }}>
        Find Us
      </h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
        </p>
        <p
          className='p__cormorant'
          style={{ color: '#DCCA87', margin: '2rem 0' }}
        >
          Opening Hours
        </p>
        <p className='p__opensans'>Mon - Fri: 10:00 am - 02:00 am</p>
        <p className='p__opensans'>Sat - Sun: 10:00 am - 03:00 am</p>
      </div>

      <button className='custom__button' style={{ marginTop: '2rem' }}>
        Visit Us
      </button>
    </div>

    {/* right */}
    <div className='app__wrapper_img'>
      <div className='app__wrapper_img-container'>
        <Image src={'/findus.png'} alt='findus' fill />
      </div>
    </div>
  </section>
);

export default FindUs;
