'use client';

import { useRef, useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import './Intro.css';

const Intro = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = () => {
    setIsPlaying((prev) => !prev);

    !isPlaying ? videoRef.current?.play() : videoRef.current?.pause();
  };

  return (
    <section className='app__video' id='intro'>
      <video
        src='/meal.mp4'
        typeof='video/mp4'
        loop
        controls={false}
        muted
        ref={videoRef}
      />

      <div className='app__video-overlay flex__center'>
        <div
          className='app__video-overlay_circle flex__center'
          onClick={handleVideoClick}
        >
          {isPlaying ? (
            <BsPauseFill color='#fff' fontSize={30} />
          ) : (
            <BsFillPlayFill color='#fff' fontSize={30} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Intro;
