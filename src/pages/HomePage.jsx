import React, { useState, useEffect } from 'react';
import './HomePage.css'
import Nav from '../components/Home/Nav'
import Hero from '../components/Home/Hero'
import Header from '../components/Home/Header'
import Member from '../components/Home/Member'
import Status from '../components/Home/Status'
import Planet from '../components/Home/planet'
import Footer from '../components/Home/footer'
import Preloader from '@/components/Preloader'
import ScrollToTop from '@/components/ScrollToTop';

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 4000); 
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <ScrollToTop/>
      <div className={`app ${loading ? 'loading' : ''}`}>
        {loading && <Preloader />}
        <div className="bg-black">
          <Nav />
          <Hero />
          <Header />
          <Member />
          <Status />
          <Planet />
          <Footer />
        </div>
      </div>


    </>
  )
}