import React from 'react'
import Header from '../comps/Header';
import DocHero from '../comps/DocHero';
import MarkovIcon from '../img/markovicon.png';
import DocCore from '../comps/DocCore';
import DocMarkov from '../comps/DocMarkov';
import Footer from '../comps/Footer';

function Markov() {
   return (
    <>
    <Header activeIndex={1} />

       <DocHero
          titleH="Breans"
          title="Markov Chains"
          content="Breans Markov Chains allow you to model stochastic (random) systems where the next state depends 
          only on the current state and not the past, this is called the Markov property. With Breans, you can easily 
          define states (nodes), set transition probabilities between them, and simulate random movements across these states."
          icon={MarkovIcon}
       />

       <DocCore doctable={
          [
            "Quickstart", "Define Nodes (States)", "Add Transitions", 
            "Normalize Transitions", "Build the Chain", "Transition Matrix", "Simulate Steps"
        ]
       }
       
       docs={<DocMarkov/>}

       />
 
      <Footer/>
       

    </>
  )
}

export default Markov