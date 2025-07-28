import React from 'react'
import Header from '../comps/Header';
import InnerHero from '../comps/InnerHero';
import Blocks from '../comps/Blocks';
import Footer from '../comps/Footer';

function Docs() {
  return (
    <>
      <Header activeIndex={1}/>
      <InnerHero titleH="Breans" title="Documentation" 
      content="Clear guides and practical examples for all six core models. Built for developers, data scientists, and researchers."
      />
      <Blocks/>
      <Footer/>
    </>
  )
}

export default Docs