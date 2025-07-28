import React from 'react'
import NNImg from '../img/nnexample.png';
import CodeSnippet from './CodeSnippet';

function HSect() {
  return (
    <div className="grid grid-cols-12 gap-4 mt-24 flex items-center">

        <div className="col-span-12 xl:col-span-4">
            <h1>
                <span>Modular</span> Design for Unlimited <span>Possibilities</span>
            </h1>
        </div>

        <div className="col-span-12 xl:col-span-8">
              <p>
                Breans is built around modularity, giving you full control to design and customize your solutions. 
                Whether it’s defining every layer and neuron in a neural network, crafting your own state transitions 
                in a Markov Chain, or assembling flexible Behavior Trees with custom conditions and actions, 
                Breans empowers you to shape models that perfectly fit your needs.
              </p>
        </div>

        <div className="col-span-12 lg:col-span-6 mt-4">
            <div className="HSectTitle">
               <h3>Example</h3>
               <h1>Neural Network Design</h1>
            </div>

            <CodeSnippet
                code={`Breans.LayerSpec[] networkdesign = {
                  new Breans.LayerSpec(4, "tanh"),
                  new Breans.LayerSpec(4, "tanh"),
                  new Breans.LayerSpec(4, "sigmoid"),
                  new Breans.LayerSpec(dataset.targets[0].length, "softmax")
                 };
              `}
              language='javascript'
              />
            
        </div>
        <div className="col-span-12 lg:col-span-4 lg:col-start-9 mt-4">
             <img src={NNImg} alt="Neural Network Design" className="HSectImg w-fit"/>
        </div>
    
    </div>
  )
}

export default HSect