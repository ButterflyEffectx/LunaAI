import { useState, useEffect } from 'react'
// import Carousel from '@/components/ResearchCal/Carousel'
// import Header from '@/components/ResearchCal/Header'
// import Content from '@/components/ResearchCal/Content'
// import Maths from '@/components/ResearchCal/maths'
// import Head from '@/components/ResearchCal/Last'

import Carousel from '@/components/ResearchCal/Carousel'
import Last from '@/components/ResearchCal/Last'
import Header from '@/components/ResearchCal/Header'
import Content from '@/components/ResearchCal/Content'
import Maths from '@/components/ResearchCal/Math'
import Nav from '@/components/Home/Nav'
import Footer from '@/components/Home/footer'
import Preloader from '@/components/Preloader'
import ScrollToTop from '@/components/ScrollToTop';


function ResearchCal() {
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
                <div className="bg-black">
                    <Nav />
                    <Header />
                    <h1 className='text-white mb:text-3xl lg:text-4xl font-bold text-center mb-6 tracking-widest'>RESEARCH</h1>
                    <Carousel />
                    <Content />
                    <Maths />
                    <br /><br /><br className='hidden lg:block' /><br className='hidden lg:block' />
                    <Last />
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default ResearchCal