import React from 'react'
import Header from '../comps/Header';
import DocHero from '../comps/DocHero';
import TreeIcon from '../img/treeicon.png';
import DocCore from '../comps/DocCore';
import DocTree from '../comps/DocTree';
import Footer from '../comps/Footer';

function Tree() {
   return (
    <>
    <Header activeIndex={1} />

       <DocHero
          titleH="Breans"
          title="Behavior Trees"
          content="Breans Behavior Trees (BT) let you design AI decision-making in a modular and visual-friendly way. 
          Behavior Trees are widely used in video games, robotics, and simulations because they separate logic into 
          small reusable nodes: decisions, timers, and actions."
          icon={TreeIcon}
       />

       <DocCore doctable={
          [
            "Quickstart", "Building the Tree", "Node Types", 
            "Example Tree Structure", "Running the Tree"
        ]
       }
       
       docs={<DocTree/>}

       />
 
      <Footer/>
       

    </>
  )
}

export default Tree