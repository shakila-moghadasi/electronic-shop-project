import React from 'react';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderimage = [
    {
      "image": "0bf6393f15441e3c4275dd6fee59becb",
    },
    {
      "image": "4061f87d8579a023b954f250ad61e25b",
    },
    {
      "image": "4c230d96b1bc3e3f2273ba79b5350885",
    },
    {
      "image": "e6cb16d83e18de8cfffaa6d780d93871",
    },
    {
      "image": "09c88b5fd14a40635a6e0f2bbec32d6d",
    },
    {
      "image": "d2090c9513a73c8d151a3aae75589599",
    }
  ]
  const slideLength = sliderimage.length;
  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <>
    <Box sx={{ pt:20 , pl:{xs:3 , md:22} }} width={{xs:370 , md:1000}}>
      {sliderimage?.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div>
                <img src={`http://localhost:3002/files/${slide.image}`}
                 alt="slide" 
                 className="image" 
                 width="100%"
                 height={400}
                />
              </div>
            )}
          </div>
        );
      })}
      <Box sx={{pl:{xs:20 , md:60}}}>
        <AiOutlineArrowLeft onClick={prevSlide} />
        <AiOutlineArrowRight onClick={nextSlide} />
      </Box>
    </Box>
    </>
  )
}