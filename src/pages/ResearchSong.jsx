import { useEffect, useState } from 'react'
import React from 'react'
import Nav from '@/components/Home/Nav'
import Header from '@/components/ResearchSong/Header'
import Intro from '@/components/ResearchSong/Intro'
import Img from '@/components/ResearchSong/Img'
import Footer from '@/components/Home/footer'
import Preloader from '@/components/Preloader';
import ScrollToTop from '@/components/ScrollToTop';

function ResearchSong() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <ScrollToTop/>
      <div className={`app ${loading ? 'loading' : ''}`}>
        {loading && <Preloader />}
        <div className="bg-black">
          <Nav />
          <Header />
          <Intro />
          <Img />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default ResearchSong;