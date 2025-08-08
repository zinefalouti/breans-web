import React from 'react'
import Header from '../comps/Header';
import DocHero from '../comps/DocHero';
import NavigatorIcon from '../img/navigateicon.png';
import DocCore from '../comps/DocCore';
import DocNavigate from '../comps/DocNavigate';
import Footer from '../comps/Footer';

function Navigator() {
  return (
    <>
    
    <Header activeIndex={1} />

       <DocHero
          titleH="Breans"
          title="Navigator"
          content="The Breans Navigator provides core pathfinding logic, enabling movement across a grid with customizable rules, obstacles, and tile-based optimizations. It is designed to support both single-path and multi-step navigation routines, including visual output for debugging and analysis."
          icon={NavigatorIcon}
       />

       <DocCore doctable={
          [
            "Quickstart", "Testing Tool", "Obstacles & Preview", 
            "Multi-Step Navigation (A*)", "Spectrum & Tile Slicing", "Simulate Navigation & Visualize"
        ]
       }
       
       docs={<DocNavigate/>}

       />
 
      <Footer/>
    </>
  )
}

export default Navigator