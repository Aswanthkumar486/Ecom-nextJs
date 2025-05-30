import React from 'react';
import Navbar from '@/components/Navbar';
import HeroCarousel from '@/components/Hero';
import data from '../data/data.json';
import AboutUs from '@/components/About';
import ProductCard from '@/components/ProductCard';
import Services from '@/components/Services';
import ContactSection from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home({
  navbarData,
  heroData,
  aboutData,
  servicesData,
  footerData,
  productsData,
  contactData
}) {
  return (
    <>
      <Navbar data={navbarData} />
      <HeroCarousel data={heroData} />
      <AboutUs data={aboutData} />
      {/* Other sections to be added here */}
      <ProductCard data={productsData} />
      <Services data={servicesData} />
      <ContactSection data={contactData} />
<Footer data={footerData} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      navbarData: data.navbar,
      heroData: data.Heropage,
      aboutData: data.about,
      servicesData: data.services,
      footerData: data.footer,
      productsData: data.products,
      contactData: data.contact ?? null
    }
  };
}

