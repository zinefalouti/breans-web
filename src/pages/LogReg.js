import React from 'react'
import Header from '../comps/Header';
import DocHero from '../comps/DocHero';
import LogRegIcon from '../img/logregicon.png';
import DocCore from '../comps/DocCore';
import DocLogReg from '../comps/DocLogReg';
import Footer from '../comps/Footer';

function LogReg() {
   return (
    <>
    <Header activeIndex={1} />

       <DocHero
          titleH="Breans"
          title="Logistic Regression"
          content="Breans Logistic Regression is designed to handle binary and multi-label classification 
          tasks by leveraging the sigmoid activation function, it transforms raw input features into clear, 
          interpretable probabilities."
          icon={LogRegIcon}
       />

       <DocCore doctable={
          [
            "Quickstart", "Load & Split Data", "Train (Gradient Descent)", "Making Predictions"
        ]
       }
       
       docs={<DocLogReg/>}

       />
 
      <Footer/>
       

    </>
  )
}



export default LogReg