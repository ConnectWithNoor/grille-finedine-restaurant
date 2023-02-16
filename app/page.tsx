import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGpt3,
} from './{section}';

import { CTA, Brand, Navbar } from './{components}';

import './global.css';

export default function Home() {
  return (
    <main className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>

      <Brand />
      <WhatGpt3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </main>
  );
}
