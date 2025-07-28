import React from 'react'
import CodeSnippet from './CodeSnippet'
import InfoIcon from '../img/infoicon.png';
import MrkvMatrix from '../img/mrkmatrix.png';

function DocMarkov() {
  return (
    <div className="Docs">
            
        <div id="section-0">
            <h2>Import</h2>
            <p>Add this line at the top of your Java file to access Markov Chain classes:</p>

            <CodeSnippet
                code={`import com.ml.breans.BreansMrk;`}
                language='javascript'
            />
        </div>

        <div id="section-1" className="mt-12">
             <h2>Define Nodes (States)</h2>
             <p>Each node represents a possible state in your system:</p>
             <CodeSnippet
                code={`BreansMrk.Node a = new BreansMrk.Node("A");
BreansMrk.Node b = new BreansMrk.Node("B");
BreansMrk.Node c = new BreansMrk.Node("C");`}
                language='javascript'
            />
            <div className="DocInfo">
                <img src={InfoIcon} alt="Info Icon"/>
                <p>
                "A", "B", "C" → Names of the states for easy identification.
                </p>
            </div>
            <div className="DocInfo">
                <img src={InfoIcon} alt="Info Icon"/>
                <p>
                You can give states any name: "Start", "Idle", "Running", etc.
                </p>
            </div>
        </div>

        <div id="section-2" className="mt-12">
             <h2>Add Transitions</h2>
             <p>We tell each node how likely it is to move to another node:</p>
             <CodeSnippet
                code={`a.addTransition(b, 0.6);
a.addTransition(c, 0.4);
b.addTransition(a, 1.0);
c.addTransition(a, 0.3);
c.addTransition(b, 0.7);`}
                language='javascript'
            />
            <div className="DocInfo">
                <img src={InfoIcon} alt="Info Icon"/>
                <p>
                <strong>targetNode</strong> → The node we can move to.
                </p>
            </div>
            <div className="DocInfo">
                <img src={InfoIcon} alt="Info Icon"/>
                <p>
                <strong>probability</strong> → How likely this move is, expressed as a number between 0.0 and 1.0.
                </p>
            </div>
            <p>From A, there is a 60% chance to go to B, and 40% chance to go to C.</p>
            <p>From B, it always (100%) goes back to A.</p>
            <p>From C, it can go to A (30%) or B (70%).</p>
        </div>

        <div id="section-3" className="mt-12">
            <h2>Normalize Transitions</h2>
            <CodeSnippet
                code={`a.normalizeTransitions();
b.normalizeTransitions();
c.normalizeTransitions();`}
                language='javascript'
            />
            <div className="DocInfo">
                <img src={InfoIcon} alt="Info Icon"/>
                <p>
                If you accidentally gave values that don’t sum to 1 
                (e.g., 0.6 + 0.4 = 1.0 → good, but if you had 0.2 + 0.4 = 0.6 → incorrect), normalization adjusts them automatically.
                </p>
            </div>
        </div>

        <div id="section-4" className="mt-12">
            <h2>Build the Chain</h2>
            <p>Create a chain starting at one node and then add all other nodes:</p>
            <CodeSnippet
                code={`BreansMrk.Chain chain = new BreansMrk.Chain(a);  // Start from node A
chain.addNode(b);
chain.addNode(c);`}
                language='javascript'
            />
            <div className="DocInfo">
                <img src={InfoIcon} alt="Info Icon"/>
                <p>
                Initial Node (here a) → Where the chain starts when simulation begins.
                </p>
            </div>
            <div className="DocInfo">
                <img src={InfoIcon} alt="Info Icon"/>
                <p>
                <strong>addNode()</strong> → Adds additional nodes so the chain knows about all possible states.
                </p>
            </div>
        </div>

        <div id="section-5" className="mt-12">
            <h2>Transition Matrix</h2>
            <CodeSnippet
                code={`chain.printTransitionMatrix();`}
                language='javascript'
            />
            <p>This prints a table showing the probability of moving from every node to every other node. For example:</p>
            <div class="DocImg">
                    Print of the Transition Matrix
                    <img src={MrkvMatrix} alt="Transition Matrix"/>
            </div>
        </div>

        <div id="section-6" className="mt-12">
            <h2>Simulate Steps</h2>
            <p>We can simulate random moves along the chain:</p>
            <CodeSnippet
                code={`for (int i = 0; i < 5; i++) {
    System.out.println("Current: " + chain.getCurrentNode().getName());
    chain.step();
}`}
                language='javascript'
            />
            <div className="DocInfo">
                <img src={InfoIcon} alt="Info Icon"/>
                <p>
                <strong>step()</strong> → Moves to a next state based on transition probabilities.
                </p>
            </div>
        </div>

    </div>
  )
}

export default DocMarkov