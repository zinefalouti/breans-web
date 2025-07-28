import React from 'react'
import Header from '../comps/Header';
import Hero from '../comps/Hero';
import Blocks from '../comps/Blocks';
import HSect from '../comps/HSect';
import Footer from '../comps/Footer';

function Home() {
  return (
    <>
    <Header activeIndex={0}/>
    <Hero/>
    <Blocks/>
    <HSect/>
    <Footer/>
    </>
  )
}

export default Home