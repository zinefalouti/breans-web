import React from 'react'
import Block from './Block';
import NeuralIcon from '../img/nnicon.png';
import LinRegIcon from '../img/linregicon.png';
import LogRegIcon from '../img/logregicon.png';
import KMeanIcon from '../img/kmeanicon.png';
import MarkovIcon from '../img/markovicon.png';
import TreeIcon from '../img/treeicon.png';
import NavIcon from '../img/navigateicon.png';
import DataIcon from '../img/datacheckicon.png';

function Blocks() {
  return (
    <div className="grid grid-cols-12 gap-4 mt-16 items-stretch">
         <div className="col-span-12 lg:col-span-6 xl:col-span-3">
            <Block
              title="Neural Networks"
              subtitle="DEEP LEARNING"
              content="Breans includes a fully customizable feed‑forward neural network designed 
              for real‑world tasks. Built from scratch in pure Java, it supports multiple activation 
              functions, backpropagation, and training with or without optimizers such as Adam."
              icon={NeuralIcon}
              link="/neuralnetwork"
            />
         </div>
         <div className="col-span-12 lg:col-span-6 xl:col-span-3">
            <Block
              title="Linear Regression"
              subtitle="REGRESSION"
              content="Breans features a robust linear regression model capable of handling 
              both simple and multivariate datasets. Built with support for the closed-form 
              normal equation and gradient descent training, it delivers accurate predictions 
              for continuous outcomes."
              icon={LinRegIcon}
              link="/linearregression"
            />
         </div>
         <div className="col-span-12 lg:col-span-6 xl:col-span-3">
            <Block
              title="Logistic Regression"
              subtitle="CLASSIFICATION"
              content="Breans includes a fully functional logistic regression model for binary and multi-class 
              classification tasks. Implemented from scratch with gradient descent optimization, it supports 
              probability estimation and decision thresholding for accurate predictions."
              icon={LogRegIcon}
              link="/logisticregression"
            />
         </div>
         <div className="col-span-12 lg:col-span-6 xl:col-span-3">
            <Block
              title="K-Means"
              subtitle="CLUSTERING"
              content="Breans provides a complete K-Means clustering implementation designed for fast and reliable 
              unsupervised learning. The model supports K-Means++ initialization for improved convergence, 
              configurable iteration limits."
              icon={KMeanIcon}
              link="/kmeans"
            />
         </div>
         <div className="col-span-12 lg:col-span-6 xl:col-span-3">
            <Block
              title="Markov Chains"
              subtitle="Stochastic"
              content="Breans includes a Markov Chain framework that allows developers to design state-based systems 
              with probabilistic transitions. Nodes can be linked with custom transition probabilities, and the framework 
              works with transition matrices for prediction."
              icon={MarkovIcon}
              link="/markovchain"
            />
         </div>
         <div className="col-span-12 lg:col-span-6 xl:col-span-3">
            <Block
              title="Behavior Trees"
              subtitle="AI BEHAVIOR"
              content="Breans offers a modular Behavior Tree (BT) implementation tailored for AI decision-making in games, 
              robotics, and simulations. The framework supports core BT node types like selectors, sequences, conditions, 
              actions, and timers."
              icon={TreeIcon}
              link="/behaviortree"
            />
         </div>
         <div className="col-span-12 lg:col-span-6 xl:col-span-3">
            <Block
              title="Multi-Step Navigation"
              subtitle="A Star Navigator"
              content="The Navigator provides core pathfinding logic, enabling movement across a grid with customizable rules, 
              obstacles, and tile-based optimizations. It is designed to support both single-path and multi-step navigation routines, 
              including visual output for debugging and analysis."
              icon={NavIcon}
              link="/navigator"
            />
         </div>
         <div className="col-span-12 lg:col-span-6 xl:col-span-3">
            <Block
              title="Data Analyzer"
              subtitle="Data Analysis"
              content="The Data Analyzer is a utility for performing essential data exploration and transformation 
              tasks on datasets stored in CSV format. It includes methods for reading data, inspecting shapes, 
              detecting missing values, generating statistical summaries, visualizing data using bar charts, and exporting reports."
              icon={DataIcon}
              link="/datacheck"
            />
         </div>
    </div>
  )
}

export default Blocks