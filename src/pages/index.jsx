import React from "react";
import { useState, useEffect } from "react";
import sounds from "../components/sounds";
import Preloader from "@/components/Preloader";
import { Header, Main } from "../components";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`app ${loading ? 'loading' : ''}`}>
        {loading && <Preloader />}
        <div className="bg-gradient-to-br from-endG2 to-startG h-full w-full min-h-screen text-[#111]">
          <Header />
          <div className="w-full flex justify-center mt-[60px]">
            <div className="p-3 w-full lg:w-[80%] xl:w-[80%] md:w-[80%]">
              <Main sounds={sounds} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
