import React from 'react'
import CodeSnippet from './CodeSnippet'
import InfoIcon from '../img/infoicon.png';

function DocDatacheck() {
  return (
    <div className="Docs">
        
        <div id="section-0">
            <h2>Import</h2>
            <p>To start using Breans Data Analyzer, import the module: </p>

            <CodeSnippet
                code={`import com.ml.breans.DataAnalyzer;`}
                language='javascript'
            />

            <p>Understand your dataset before training.</p>
            <p>Use Data Analyzer to preview, inspect, and prepare your CSV data file in just a few lines. 
               This is your essential first step for effective machine learning, whether you're just starting or fine-tuning.</p>
        </div>

        <div id="section-1" className="mt-12">
            <h2>CSV to Matrix</h2>
            <p>This reads your dataset from a CSV file into a 2D matrix (grid) that all analyzer functions work with.</p>

            <CodeSnippet
                code={`String[][] grid = readCsvToMatrix("nvdstock.csv");`}
                language='javascript'
            />
        </div>

        <div id="section-2" className="mt-12">
            <h2>Check dataset shape</h2>
            <p>Shows the number of rows and columns in your dataset, great for a quick sanity check.</p>

            <CodeSnippet
                code={`DataShape(grid);`}
                language='javascript'
            />
        </div>

        <div id="section-3" className="mt-12">
            <h2>Preview the data</h2>
            <p>Perfect for spotting headers, outliers, or formatting issues.</p>

            <CodeSnippet
                code={`DataHead(grid, 6); `}
                language='javascript'
            />
            <div className="DocInfo">
                <img src={InfoIcon} alt="Info Icon"/>
                <p>
                <strong>DataHead</strong> displays the first N rows (in this case, 6).
                </p>
            </div>
            <CodeSnippet
                code={`DataTail(grid, 3); `}
                language='javascript'
            />
            <div className="DocInfo">
                <img src={InfoIcon} alt="Info Icon"/>
                <p>
                <strong>DataTail</strong> shows the last N rows (here, 3).
                </p>
            </div>
        </div>

        <div id="section-4" className="mt-12">
            <h2>Find missing values</h2>
            <p>Identifies rows or columns with empty cells, helping you clean up or filter bad entries before training.</p>

            <CodeSnippet
                code={`FindBlank(grid);`}
                language='javascript'
            />
        </div>

        <div id="section-5" className="mt-12">
            <h2>Describe your columns</h2>
            <p>Gives you basic stats (mean, min, max, etc.) for each numerical column — an instant overview of your data distribution.</p>

            <CodeSnippet
                code={`Describe(grid);`}
                language='javascript'
            />
        </div>

        <div id="section-6" className="mt-12">
            <h2>Generate a full report</h2>
            <p>Creates a neat report combining: Dataset shape, Head and tail, Missing values, and Column stats.</p>

            <CodeSnippet
                code={`DataSetSummary(grid, "DataAnalysisReport", 6, 3);`}
                language='javascript'
            />

            <div className="DocInfo">
                <img src={InfoIcon} alt="Info Icon"/>
                <p>
                <strong>"DataAnalysisReport"</strong> is the name you choose for the html 
                file that showcases the summary report about your dataset.
                </p>
            </div>
            
        </div>

        <div id="section-7" className="mt-12">
            <h2>Encode categorical columns</h2>
            <p>Converts column 5 into numeric format, useful when working with text categories.</p>

            <CodeSnippet
                code={`dataset.EncodeCol(5);`}
                language='javascript'
            />           
        </div>

        <div id="section-8" className="mt-12">
            <h2>Normalize numeric values</h2>
            <p>Scales the values of column 4 to a standard range, often improving model performance.</p>

            <CodeSnippet
                code={`dataset.normalizeColumn(4);`}
                language='javascript'
            />           
        </div>

        <div id="section-9" className="mt-12">
            <h2>Save the clean dataset</h2>
            <p>Exports your updated dataset to a new CSV file for training.</p>

            <CodeSnippet
                code={`dataset.saveToCsv("nvdstock_modified.csv");`}
                language='javascript'
            />           
        </div>




    </div>
  )
}

export default DocDatacheck