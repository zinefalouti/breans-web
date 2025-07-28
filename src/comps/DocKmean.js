import React from 'react'
import CodeSnippet from './CodeSnippet'
import InfoIcon from '../img/infoicon.png';
import Euclid from '../img/euclid.png';

function DocKmean() {
  return (
    <div className="Docs">
        
        <div id="section-0">
            <h2>Import</h2>
            <p>To start using Breans K-Means, import the clustering module: </p>

            <CodeSnippet
                code={`import com.ml.breans.BreansK;`}
                language='javascript'
            />
        </div>

        <div id="section-1" className="mt-12">
            <h2>Load Your Data</h2>
            <p>Convert your dataset to a numeric matrix with the built-in CSV reader. 
               This method automatically skips headers and converts all numeric fields to double. </p>

            <CodeSnippet
                code={`double[][] data = BreansK.CSVtoMatrix("kdataset.csv");`}
                language='javascript'
            />
            <div className="DocInfo">
                <img src={InfoIcon} alt="Info Icon"/>
                <p>
                Each row represents a single sample (for example, one customer, product, or record).
                </p>
            </div>
            <div className="DocInfo">
                <img src={InfoIcon} alt="Info Icon"/>
                <p>
                Each column represents a feature (e.g., height, weight, income, or any measurable attribute).
                </p>
            </div>
        </div>

        <div id="section-2" className="mt-12">
            <h2>Run K-Means Clustering</h2>
            <p>Choose the number of clusters (k), maximum iterations, and a convergence tolerance. 
                Breans uses K-Means++ initialization to select better starting centroids, improving convergence and stability.</p>
            <CodeSnippet
                code={`int k = 6;
int maxIterations = 100;
double tolerance = 1e-4;

BreansK.KMeansResult result = BreansK.kMeans(data, k, maxIterations, tolerance);`}
                language='javascript'
            />
            <div className="DocInfo">
                <img src={InfoIcon} alt="Info Icon"/>
                <p>
                <strong>k (Number of Clusters):</strong> How many groups you want to divide your data into. For example, 
                k = 3 means the algorithm will find 3 groups of similar points.
                </p>
            </div>
            <div className="DocInfo">
                <img src={InfoIcon} alt="Info Icon"/>
                <p>
                <strong>maxIterations:</strong> The maximum number of times the algorithm will try to adjust the cluster centers. 
                Usually, 100 is a safe starting point.
                </p>
            </div>
            <div className="DocInfo">
                <img src={InfoIcon} alt="Info Icon"/>
                <p>
                <strong>tolerance:</strong> The minimum change between iterations required to stop early. 
                A smaller value (like 1e-4) means more precise convergence.
                </p>
            </div>
            <h3>Modern K-Means use a straight power of 2 as  a distance between two point in the n space (Matrix Row) 
                but Breans K-Mean uses the proper Euclidean Distance: </h3>
            <div class="DocImg">
                    Euclidean Distance as Used in Breans K-Means
                    <img src={Euclid} alt="Euclidean Distance"/>
            </div>
            <div className="DocInfo">
                <img src={InfoIcon} alt="Info Icon"/>
                <p>
                P, Q= two points in Euclidean n-space. (Two Different Rows/Vectors in the Matrix/Your Dataset)
                </p>
            </div>
        </div>

        <div id="section-3" className="mt-12">
            <h2>Export Results (HTML)</h2>
            <p>You can export the final clustering results for inspection:</p>
            <CodeSnippet
                code={`BreansK.exportClustersToHTML(data, result.assignments, k, "clustered_data.html");`}
                language='javascript'
            />
            <div className="DocInfo">
                <img src={InfoIcon} alt="Info Icon"/>
                <p>
                HTML File: Opens in your browser with rows color-coded based on their cluster.
                </p>
            </div>

        </div>

        <div id="section-4" className="mt-12">
            <h2>Export Results (CSV)</h2>
            <p>You can export the final clustering results for inspection:</p>
            <CodeSnippet
                code={`BreansK.exportClustersToCSV(data, result.assignments, "clustered_data.csv");`}
                language='javascript'
            />
            <div className="DocInfo">
                <img src={InfoIcon} alt="Info Icon"/>
                <p>
                CSV File: A spreadsheet-friendly file where each row now includes its cluster index.
                </p>
            </div>

        </div>

        <div id="section-5" className="mt-12">
            <h2>Result Structure</h2>
            <p>The returned KMeansResult gives you:</p>
            <div className="DocInfo">
                <img src={InfoIcon} alt="Info Icon"/>
                <p>
                <strong>assignments:</strong> An integer array telling you which cluster each point belongs to.
                </p>
            </div>
            <div className="DocInfo">
                <img src={InfoIcon} alt="Info Icon"/>
                <p>
                <strong>centroids:</strong> The final calculated center of each cluster.
                </p>
            </div>
            <div className="DocInfo">
                <img src={InfoIcon} alt="Info Icon"/>
                <p>
                <strong>inertiaHistory:</strong> A list of “inertia” values (sum of squared distances) 
                showing how well points fit into their clusters over time, useful for diagnosing convergence.
                </p>
            </div>

        </div>

    </div>
  )
}

export default DocKmean