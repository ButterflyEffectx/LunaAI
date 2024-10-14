import { useEffect, useState } from 'react'

import React from 'react';
import Header from '../components/ResearchChat/Header';
import Intro from '../components/ResearchChat/Intro';
import Img from '@/components/ResearchChat/Img';
import Nav from '@/components/Home/Nav';
import Footer from '@/components/Home/footer';
import Preloader from '@/components/Preloader';
import ScrollToTop from '@/components/ScrollToTop';

function ResearchChat() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <ScrollToTop />
      <div className={`app ${loading ? 'loading' : ''}`}>
        {loading && <Preloader />}
        <div className="min-h-screen bg-black text-white flex flex-col">
          <Nav />
          <Header />
          <div className="flex-grow flex flex-col items-center justify-center">
            <Intro />
            <div className="mt-4"> 
              <Img /> 
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default ResearchChat;