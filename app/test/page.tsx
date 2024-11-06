"use client"

import React from 'react'

import EmblaCarousel from "@/components/EmblaCarousel";

import { EmblaOptionsType } from 'embla-carousel'
import '../globals.css';

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }
const SLIDE_COUNT = 4
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
const LandingPage = () => {
  return (
    <div className="min-h-screen">
      
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        
      
      
    </div>
  );
};

export default LandingPage;