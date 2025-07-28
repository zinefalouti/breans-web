import React from 'react'
import CodeSnippet from './CodeSnippet'
import InfoIcon from '../img/infoicon.png';
import Sigmoid from '../img/sigmoid.png';
import TanH from '../img/tanh.png';
import ReLu from '../img/relu.png';
import Softmax from '../img/softmax.png';

function DocNN() {
  return (
    <div className="Docs">

       <div id="section-0">
           <h2>Import</h2>
           <p>To start using the Breans Neural Network, simply import the package and run a basic pipeline:</p>

           <CodeSnippet
                code={`import com.ml.breans.Breans;`}
                language='javascript'
           />
       </div>


       <div id="section-1" className="mt-12">
           <h2>Dataset Loading</h2>
           <p>This separation of inputs and labels allows the framework to handle different types of data, 
            including numeric and categorical values.</p>
            <h3>Numerical datasets:</h3>
            <CodeSnippet
                code={`Breans.Dataset dataset = Breans.loadCSVDataset("data.csv", 7, 3);`}
                language='javascript'
           />
           <div className="DocInfo">
               <img src={InfoIcon} alt="Info Icon"/>
               <p>
                 Here, 7 is the number of input columns and 3 is the number of target columns.
               </p>
           </div>
           <h3>For datasets with categorical features (e.g., strings or mixed values):</h3>
           <CodeSnippet
                code={`Breans.Dataset dataset = Breans.loadCSVDatasetWithCategorical("datastrings.csv", 9);`}
                language='javascript'
           />
           <div className="DocInfo">
               <img src={InfoIcon} alt="Info Icon"/>
               <p>
                 This automatically converts categorical values into numeric one-hot encoded vectors for use in the network. 
                 “9” is the index of the column in the dataset which starts with the first column, “0”
               </p>
           </div>
           <p>After loading, normalization is recommended to scale feature values to a range 
            the neural network can train on efficiently:</p>
            <CodeSnippet
                code={`Breans.Normalization norm = Breans.normalizeDataset(dataset);`}
                language='javascript'
           />
       </div>

       <div id="section-2" className="mt-12">
          <h2>Network Design</h2>
          <p>The structure of your neural network is described using an array of LayerSpec objects. 
            Each LayerSpec defines how many neurons are in a layer and what activation function to use.</p>
          <h3>Breans has 3 activation functions you can choose from:</h3>
          <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 lg:col-span-1">
                 <div class="DocImg">
                    Sigmoid
                    <img src={Sigmoid} alt="Sigmoid"/>
                 </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                 <div class="DocImg">
                    Hyperbolic Tangent Function
                    <img src={TanH} alt="TanH"/>
                 </div>
              </div>
              <div className="col-span-2">
                 <div class="DocImg">
                    Rectified Linear Unit
                    <img src={ReLu} alt="ReLu"/>
                 </div>
              </div>
              <div className="col-span-2">
                 <h3>In the case of multiple or encoded outputs/targets, the output layer should be handled by Softmax</h3>
                 <div class="DocImg">
                    Softmax
                    <img src={Softmax} alt="softmax"/>
                 </div>
              </div>
          </div>
          <p>The Softmax formula transforms a vector of raw scores (logits) into a vector of probabilities that sum to 1.</p>
          <h3>Neural Network design example with two hidden layers and one output layer:</h3>
          <CodeSnippet
                code={`Breans.LayerSpec[] design = {
                            new Breans.LayerSpec(40, "tanh"),     // first hidden layer with 40 neurons
                            new Breans.LayerSpec(20, "tanh"),     // second hidden layer with 20 neurons
                            new Breans.LayerSpec(dataset.targets[0].length, "softmax") // output layer
                        };
                        Breans.Layer[] network = Breans.createNetwork(dataset.inputs[0].length, design);
                        `}
                language='javascript'
           />
           <div className="DocInfo">
               <img src={InfoIcon} alt="Info Icon"/>
               <p>
                 Activation Fx in Breans: <strong>relu</strong> (Rectified Linear Unit), 
                  <strong> sigmoid</strong> (Sigmoid), <strong>tanh</strong> (Hyperbolic Tangent Function).
               </p>
           </div>
       </div>

       <div id="section-3" className="mt-12">
           <h2>Training</h2>
           <p>Training adjusts the weights of the network so it can correctly map inputs to outputs.Breans offers two training modes:</p>
           <h3>Standard Gradient Descent (SGD): A simple, classic training method.</h3>
           <CodeSnippet
                code={`Breans.train(network, dataset, 130, 0.001);       // Standard SGD`}
                language='javascript'
           />
           <h3>Adam Optimizer: A more advanced optimizer that often converges faster.</h3>
           <CodeSnippet
                code={`Breans.trainAdam(network, dataset, 130, 0.001);   // Adam Optimizer`}
                language='javascript'
           />
           <div className="DocInfo">
               <img src={InfoIcon} alt="Info Icon"/>
               <p>
                 Here, 130 is the number of epochs and 0.001 is the learning rate.
               </p>
           </div>
       </div>

       <div id="section-4" className="mt-12">
            <h2>Evaluation</h2>
            <p>After training, it is essential to check model performance.Breans provides a simple evaluation method 
                which measures the network’s ability to predict outputs on the dataset 
                and can print detailed accuracy information:</p>

            <CodeSnippet
                code={`Breans.evaluateDataset(network, dataset, true);`}
                language='javascript'
           />
           <div className="DocInfo">
               <img src={InfoIcon} alt="Info Icon"/>
               <p>
                 The last Boolean parameter enables console output for debugging and analysis.
               </p>
           </div>
       </div>

       <div id="section-5" className="mt-12">
           <h2>Saving and Loading</h2>
           <p>Breans lets you save both the network structure and the normalization used during training. 
            This means your trained model can be reused without retraining:</p>
            <CodeSnippet
                code={`Breans.saveNetwork(network, "model.txt", norm);`}
                language='javascript'
           />
           <div className="DocInfo">
               <img src={InfoIcon} alt="Info Icon"/>
               <p>
                 <strong>“norm”</strong> is the object created earlier to normalize the dataset and 
                 can be saved and loaded post-training of the neural network.
               </p>
           </div>
           <p>Loading the model:</p>
           <CodeSnippet
                code={`Breans.LoadedModel loaded = Breans.loadNetwork("model.txt");`}
                language='javascript'
           />
           <p>The loaded model comes with a .predict() method ready to infer new inputs:</p>
           <CodeSnippet
                code={`double[] result = loaded.predict(dataset.inputs[2]);`}
                language='javascript'
           />
       </div>

       <div id="section-6" className="mt-12">
          <h2>Prediction</h2>
          <p>Prediction is as easy as passing an input array to the loaded model:</p>
          <CodeSnippet
                code={`double[] output = loaded.predict(new double[]{...});`}
                language='javascript'
           />
           <p>The output format depends on your output layer activation (e.g., softmax gives class probabilities).</p>
       </div>

    </div>
  )
}

export default DocNN