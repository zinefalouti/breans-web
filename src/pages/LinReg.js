import React from 'react'
import Header from '../comps/Header';
import DocHero from '../comps/DocHero';
import LinRegIcon from '../img/linregicon.png';
import DocCore from '../comps/DocCore';
import DocLinReg from '../comps/DocLinReg';
import Footer from '../comps/Footer';

function LinReg() {
  return (
    <>
    <Header activeIndex={1} />

       <DocHero
          titleH="Breans"
          title="Linear Regression"
          content="Breans Linear Regression offers a straightforward way to model relationships between variables 
          and predict continuous outcomes. If you’re analyzing trends, forecasting numeric values, or exploring correlations, 
          this model gives you everything you need."
          icon={LinRegIcon}
       />

       <DocCore doctable={
          [
            "Quickstart", "Load & Split Data", "Train (Normal Equation)", "Making Predictions"
        ]
       }
       
       docs={<DocLinReg/>}

       />
 
      <Footer/>
       

    </>
  )
}

export default LinReg