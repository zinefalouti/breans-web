import React from 'react'
import CodeSnippet from './CodeSnippet'
import InfoIcon from '../img/infoicon.png';

function DocLogReg() {
  return (
    <div className="Docs">
        
               <div id="section-0">
                   <h2>Import</h2>
                   <p>To start using Logistic Regression, import the BreansReg package. 
                    This provides access to data handling, model training, and classification methods.</p>
        
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
                                    double[][] data = loader.read("classificationdata.csv");
                                    int[] outputCols = {3}; // specify the output column (class labels)
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
                    <h2>Train (Gradient Descent)</h2>
                    <p>Create the Logistic Regression model:</p>
                    <CodeSnippet
                            code={`BreansReg.LogReg logModel = new BreansReg.LogReg();`}
                            language='javascript'
                    />
                    <p>Train the model using gradient descent:</p>
                    <CodeSnippet
                            code={`logModel.train(split.X, split.Y, 0.01, 1000);`}
                            language='javascript'
                    />
                    <div className="DocInfo">
                            <img src={InfoIcon} alt="Info Icon"/>
                            <p>
                            Where 0.0001 is the learning rate and 1000 is the number of epochs.
                            </p>
                    </div>
                    <p>Logistic Regression uses the sigmoid function internally to map inputs to probabilities between 0 and 1.</p>
                </div>

                <div id="section-3" className="mt-12">
                    <h2>Making Predictions</h2>
                    <p>After training, you can predict probabilities or class labels:</p>
                    <CodeSnippet
                            code={`// Predict probability outputs (values between 0 and 1)
double[][] probabilities = logModel.predictProba(split.X);

// Predict binary class labels (0 or 1)
int[][] predictions = logModel.predict(split.X);`}
                            language='javascript'
                    />
                    <div className="DocInfo">
                            <img src={InfoIcon} alt="Info Icon"/>
                            <p>
                            <strong>predictProba()</strong> returns the raw sigmoid probabilities.
                            </p>
                    </div>
                    <div className="DocInfo">
                            <img src={InfoIcon} alt="Info Icon"/>
                            <p>
                            <strong>predict()</strong> returns class predictions based on a default threshold of 0.5.
                            </p>
                    </div>

                </div>

    </div>
  )
}

export default DocLogReg