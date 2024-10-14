import React, { useState } from "react";
// material ui
import Slider from '@mui/material/Slider';


// components
import { Btn } from ".";

// showing progress using nprogress
import NProgress from "nprogress";

// icons
import { FiVolume, FiVolume1, FiVolume2, FiVolumeX } from "react-icons/fi";

import toast from "react-hot-toast"; // react-hot-toast

const Main = ({ sounds }) => {
  const [searchTerm, setSearchTerm] = useState("");
  
  
  // play each sound
  const playSound = (name) => {
    let audio = document.getElementById(name);
    const slider = document.querySelector(`.${name}-slider`);
    const gradientDiv = document.querySelector(`.${name}-div`);

    if (audio.paused) {
      toast.loading(`Loading ${name} 🎵`); /// loading state
      NProgress.start();

      audio.play();
      gradientDiv.classList.add("gradient-animated");
      slider.style.opacity = 1;

      setTimeout(() => {
        toast.remove();
        NProgress.done();
      }, [1000]);
    } else {
      audio.pause();
      setTimeout(() => {
        toast.remove();
        NProgress.done();
      }, [1000]);

      gradientDiv.classList.remove("gradient-animated");
      slider.style.opacity = 0;
    }
  };

  const handleSearch = () => {
    const foundSounds = sounds.filter(sound => searchTerm.includes(sound.name));

    if (foundSounds.length > 0) {
      foundSounds.forEach(foundSound => playSound(foundSound.name));
    } else {
      toast.error("ไม่พบเสียงที่ตรงกับคำค้นหา");
    }
  };


  return (
    <>
      <div className="flex justify-center items-center mt-5">
        <input
          type="text"
          placeholder="ค้นหาเสียง... (Type English)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="md:w-1/4 lg:w-1/2 p-2 border border-gray-300 rounded"
        />
        <button onClick={handleSearch} className="ml-2 bg-blue-500 text-white rounded p-2">
          ค้นหา
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-center mt-5">
        {sounds.map((sound, key) => {
          let [itemVolume, setItemVolume] = useState(1);

          const onChange = (e, volume) => {
            document.getElementById(sound.name).volume = volume / 100;
            setItemVolume(volume / 100);
          };

          return (
            <Btn className="!rounded-[20px] !m-3 item" key={key}>
              <div
                className={`white-grained p-1 rounded-[20px] ${sound.name}-div h-[300px] w-[300px] lg:h-[200px] lg:w-[200px] xl:h-[200px] xl:w-[200px]`}
              >
                <div
                  data-sound={sound.name}
                  className="cursor-pointer relative white-grained h-full w-full overflow-hidden rounded-[20px]"
                  onClick={() => playSound(sound.name)}
                >
                  <audio id={sound.name} preload="none" loop>
                    <source
                      src={
                        sound.soundLink
                          ? sound.soundLink
                          : `/sounds/${sound.name}.mp3`
                      }
                      alt="play"
                      type="audio/mp3"
                    />
                  </audio>
                  <h1 className="absolute top-1 left-3 text-md capitalize font-light mt-1 opacity-[.85]">
                    
                  </h1>
                  <div className="w-full h-full flex items-center justify-center text-[#555]">
                    {sound.icon && sound.icon}
                  </div>
                </div>
                <div
                  className={`w-[calc(100%-8px)] px-4 py-2 absolute bottom-1 left-1 flex items-center justify-between grained-bg opacity-0 ${sound.name}-slider rounded-b-[20px]`}
                >
                  <div className={`w-[75%] h-3 flex items-center`}>
                    <Slider
                      min={0}
                      color="primary"
                      max={100}
                      valueLabelDisplay="auto"
                      defaultValue={100}
                      onChange={onChange}
                    />
                  </div>
                  {itemVolume > 0.7 ? (
                    <FiVolume2 className="text-xl" />
                  ) : itemVolume > 0.4 ? (
                    <FiVolume1 className="text-xl" />
                  ) : itemVolume > 0.05 ? (
                    <FiVolume className="text-xl" />
                  ) : (
                    <FiVolumeX className="text-xl" />
                  )}
                </div>
              </div>
            </Btn>
          );
        })}
      </div>
    </>
  );
};

export default Main;
