import React from 'react'
import Header from '../comps/Header';
import InnerHero from '../comps/InnerHero';
import Footer from '../comps/Footer';
import Project from '../comps/ExampleBlock';
import Prj1 from '../img/prj1.png';
import Prj2 from '../img/prj2.png';
import Prj3 from '../img/prj3.png';
import Prj4 from '../img/prj4.png';

function Examples() {
  return (
    <>
      <Header activeIndex={2}/>
      <InnerHero titleH="Breans" title="Examples" 
      content="A few practical examples demonstrating how to use the Breans machine learning library. 
      The samples cover neural networks for classification, linear regression for forecasting, 
      and Markov chains for sequence prediction."
      />

      <Project
         title="Banana Quality Prediction"
         subtitle="USES BREANS NEURAL NETWORK"
         content="This example demonstrates how to use the Breans Neural Network to classify banana 
         quality based on several measurable factors. It shows how to prepare the dataset, 
         design a network with multiple layers, train it using SGD, and make predictions. 
         The example highlights the neural network’s ability to handle categorical outputs 
         and deliver confidence scores."
         link="https://github.com/zinefalouti/breans-examples/tree/main/example1"
         img={Prj1}
      />

      <Project
         title="Nvidia Stock Prediction"
         subtitle="USES BREANS LINEAR REGRESSION"
         content="This example uses Breans Linear Regression to predict Nvidia stock prices based on historical market data. 
         It covers data cleaning, loading, feature selection, model training, and making price predictions. 
         The example illustrates how regression models can analyze financial time series to forecast future values."
         link="https://github.com/zinefalouti/breans-examples/tree/main/example2"
         img={Prj2}
      />

      <Project
         title="Weather Prediction"
         subtitle="USES BREANS MARKOV CHAINS"
         content="This example demonstrates how to use Breans Markov Chain to model and predict weather patterns. 
         By defining weather states and their transition probabilities, the model simulates likely sequences 
         of weather conditions over time. It showcases how Markov Chains can capture temporal dependencies in categorical data."
         link="https://github.com/zinefalouti/breans-examples/tree/main/example3"
         img={Prj3}
      />

      <Project
         title="Air Quality"
         subtitle="USES BREANS Data Analyzer"
         content="This example demonstrates how to use Breans DataAnalyzer to perform basic exploration of 
         a dataset containing air quality, pollution, and respiratory health data. It displays the dataset's 
         head, tail, and statistical summary, applies label encoding to a selected categorical column, and 
         generates a concise report. The modified dataset is then saved as a new CSV file."
         link="https://github.com/zinefalouti/breans-examples/tree/main/example4"
         img={Prj4}
      />

      <Footer/>
    </>
  )
}

export default Examples