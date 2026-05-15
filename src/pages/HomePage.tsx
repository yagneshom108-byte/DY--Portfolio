import React from 'react';

import { MainLayout } from '@/components/layout/MainLayout';

import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Showreel } from '@/components/sections/Showreel';
import { Experience } from '@/components/sections/Experience';
import { Education } from '@/components/sections/Education';
import { Portfolio } from '@/components/sections/Portfolio';
import { Testimonials } from '@/components/sections/Testimonials';
import { SoftwareExpertise } from '@/components/sections/SoftwareExpertise';
import { CTA } from '@/components/sections/CTA';

const HomePage: React.FC = () => {

  return (

    <MainLayout>

      <Hero />

      <About />

      <Services />

      <Showreel />

      <Experience />

      <Education />

      <Portfolio />

      <Testimonials />

      <SoftwareExpertise />

      <CTA />

    </MainLayout>

  );

};

export default HomePage;