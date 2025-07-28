import React from 'react'
import CodeSnippet from './CodeSnippet'
import InfoIcon from '../img/infoicon.png';

function DocLinReg() {
  return (
    <div className="Docs">
    
           <div id="section-0">
               <h2>Import</h2>
               <p>To start using Linear Regression, import the BreansReg package. 
                This gives you access to dataset handling, training, and prediction methods.</p>
    
               <CodeSnippet
                    code={`import com.ml.breans.BreansReg;`}
                    language='javascript'
               />
           </div>

           <div id="section-1" className="mt-12">
               <h2>Load & Split Data</h2>
               <p>The first step is to prepare your dataset from a CSV file:</p>
               <CodeSnippet
                    code={`BreansReg.CSVLoader loader = new BreansReg.CSVLoader();
                            double[][] data = loader.read("regdataset.csv");
                            int[] outputCols = {2, 4}; // specify which columns are output
                            BreansReg.DataSplit split = loader.split(data, outputCols);`}
                    language='javascript'
               />
               <div className="DocInfo">
                    <img src={InfoIcon} alt="Info Icon"/>
                    <p>
                       <strong>read()</strong> loads the CSV as a matrix of doubles.
                    </p>
                </div>
                 <div className="DocInfo">
                    <img src={InfoIcon} alt="Info Icon"/>
                    <p>
                       <strong>split() </strong> separates input features (X) from output targets (Y) based on the columns you define.
                    </p>
                </div>
           </div>

           <div id="section-2" className="mt-12">
               <h2>Train (Normal Equation)</h2>
               <p>Instantiate the model and train using the “Normal Equation”:</p>
               <CodeSnippet
                    code={`BreansReg.LinReg model = new BreansReg.LinReg();
model.train(split.X, split.Y);`}
                    language='javascript'
               />

           </div>

           <div id="section-3" className="mt-12">
                <h2>Making Predictions</h2>
                <p>Once trained, you can predict new values:</p>
                <CodeSnippet
                    code={`double[][] exampleToPredict = {{37.454011884736246, 14.203164615428776, 70.89957821641812}};
                              double[][] prediction = model.predict(exampleToPredict);`}
                    language='javascript'
               />
               <p>The result is a matrix of predictions, where each row corresponds to an input sample 
                and each column to a target output.</p>
                <div className="DocInfo">
                    <img src={InfoIcon} alt="Info Icon"/>
                    <p>
                       (Your output will depend on the data and training.)
                    </p>
                </div>
           </div>

    </div>
  )
}

export default DocLinReg