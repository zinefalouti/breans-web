import React from 'react'
import CodeSnippet from './CodeSnippet'
import InfoIcon from '../img/infoicon.png';

function DocNavigate() {
  return (
    <div className="Docs">
        
        <div id="section-0">
            <h2>Import</h2>
            <p>To start using Breans Navigator, import the module: </p>

            <CodeSnippet
                code={`import com.ml.breans.Navigate;`}
                language='javascript'
            />
        </div>

        <div id="section-1" className="mt-12">
            <h2>Testing Tool</h2>
            <p>You can quickly generate a random grid for testing purposes using GenGrid.</p>

            <CodeSnippet
                code={`int[][] bigGrid = Navigate.GenGrid(130, 130);`}
                language='javascript'
            />
            <div className="DocInfo">
                <img src={InfoIcon} alt="Info Icon"/>
                <p>
                130: Width of the grid (number of columns).
                </p>
            </div>
            <div className="DocInfo">
                <img src={InfoIcon} alt="Info Icon"/>
                <p>
                130: Height of the grid (number of rows).
                </p>
            </div>
            <p>PS: Normally you will import or generate your own grid from real-life data.</p>
        </div>

        <div id="section-2" className="mt-12">
            <h2>Obstacles & Preview</h2>
            <p>Define which values in the grid represent obstacles, and print the generated grid to the console.</p>

            <CodeSnippet
                code={`int[] obstacles = {2,7,9};`}
                language='javascript'
            />
            <div className="DocInfo">
                <img src={InfoIcon} alt="Info Icon"/>
                <p>
                <strong>obstacles:</strong> Array of grid values that represent impassable terrain (e.g., walls or blocks).
                </p>
            </div>
            <CodeSnippet
                code={`Navigate.PrintGrid(bigGrid);`}
                language='javascript'
            />
            <div className="DocInfo">
                <img src={InfoIcon} alt="Info Icon"/>
                <p>
                <strong>bigGrid:</strong>  an int[][] grid you either imported or generated.
                </p>
            </div>
        </div>

        <div id="section-3" className="mt-12">
            <h2>Multi-Step Navigation using A* Algorithm</h2>
            <p>Define a sequence of steps (waypoints), and use the built-in multi-step navigation to calculate a path through all of them.</p>
            <p>PS: The A* alogirthm is used for each step</p>
            <CodeSnippet
                code={`int[][] steps = {
    {0, 0},
    {7, 43},
    {32, 32},
    {24, 26},
    {62, 34},
    {126, 103},
    {73, 103}
};`}
                language='javascript'
            />
            <div className="DocInfo">
                <img src={InfoIcon} alt="Info Icon"/>
                <p>
                  A coordinate (x, y) in the grid, representing a checkpoint for the path.
                </p>
            </div>
            <p>In the previous example we have declared 6 steps starting from 0,0 and stopping at 73,103</p>
        </div>


        <div id="section-4" className="mt-12">
            <h2>Spectrum & Tile Slicing</h2>
            <p>Split the large grid into smaller tiles for better navigation simulation.</p>
            <CodeSnippet
                code={`int tileSize = 13;
int[][][][] tiles = Navigate.sliceGrid(bigGrid, tileSize);`}
                language='javascript'
            />
            <div className="DocInfo">
                <img src={InfoIcon} alt="Info Icon"/>
                <p>
                  <strong>tileSize: </strong> Size of each square tile (e.g., 13x13).
                </p>
            </div>
            <div className="DocInfo">
                <img src={InfoIcon} alt="Info Icon"/>
                <p>
                  <strong>bigGrid: </strong> The main 2D grid to be divided.
                </p>
            </div>
        </div>

        <div id="section-5" className="mt-12">
            <h2>Simulate Navigation & Visualize</h2>
            <p>Run the full simulation, computing the path between all the defined waypoints, 
                then export the result to an HTML file for visualization.</p>
            <CodeSnippet
                code={`List<List<int[]>> allPaths = Navigate.multiStepNavigate(bigGrid, tiles, obstacles, tileSize, steps);`}
                language='javascript'
            />
            <div className="DocInfo">
                <img src={InfoIcon} alt="Info Icon"/>
                <p>
                  <strong>bigGrid: </strong> The main navigation grid.
                </p>
            </div>
            <div className="DocInfo">
                <img src={InfoIcon} alt="Info Icon"/>
                <p>
                  <strong>tiles: </strong>The sliced grid tiles (from sliceGrid()).
                </p>
            </div>
            <div className="DocInfo">
                <img src={InfoIcon} alt="Info Icon"/>
                <p>
                  <strong>obstacles: </strong>Terrain values that are impassable.
                </p>
            </div>
            <div className="DocInfo">
                <img src={InfoIcon} alt="Info Icon"/>
                <p>
                  <strong>tileSize: </strong>The size of each tile.
                </p>
            </div>
            <div className="DocInfo">
                <img src={InfoIcon} alt="Info Icon"/>
                <p>
                  <strong>steps: </strong>List of (x, y) coordinates to navigate through.
                </p>
            </div>
            <CodeSnippet
                code={`Navigate.exportAllPathsHTML(bigGrid, allPaths, obstacles, "multi_step_paths");`}
                language='javascript'
            />
            <div className="DocInfo">
                <img src={InfoIcon} alt="Info Icon"/>
                <p>
                  <strong>allPaths: </strong>The full multi-step navigation result.
                </p>
            </div>
            <div className="DocInfo">
                <img src={InfoIcon} alt="Info Icon"/>
                <p>
                  <strong>"multi_step_paths": </strong>Filename of your choice for the generated HTML output (without extension).
                </p>
            </div>
            
            
        </div>



    </div>
  )
}

export default DocNavigate