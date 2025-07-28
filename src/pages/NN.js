import React from 'react'
import Header from '../comps/Header';
import DocHero from '../comps/DocHero';
import NNIcon from '../img/nnicon.png';
import DocCore from '../comps/DocCore';
import DocNN from '../comps/DocNN';
import Footer from '../comps/Footer';

function NN() {
  return (
    <>
       
       <Header activeIndex={1} />

       <DocHero
          titleH="Breans"
          title="Neural Network"
          content="Breans includes a fully customizable feed‑forward neural network designed for real‑world tasks. 
          Built from scratch in pure Java, it supports multiple activation functions, backpropagation, and training 
          with or without optimizers such as Adam."
          icon={NNIcon}
       />

       <DocCore doctable={
          [
            "Quickstart", "Dataset Loading", "Network Design",
            "Training","Evaluation","Saving and Loading",
            "Prediction"
        ]
       }
       
       docs={<DocNN/>}

       />
 
      <Footer/>
       

    </>
  )
}

export default NN