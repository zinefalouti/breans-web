import React from 'react'
import CodeSnippet from './CodeSnippet'
import InfoIcon from '../img/infoicon.png';
import TreeExample from '../img/treeexample.png';

function DocTree() {
  return (
    <div className="Docs">
                
        <div id="section-0">
            <h2>Import</h2>
            <p>Add this line at the top of your Java file to access the Behavior Tree classes:</p>

            <CodeSnippet
                code={`import com.ml.breans.BreansBT;`}
                language='javascript'
            />
        </div>

        <div id="section-1" className="mt-12">
            <h2>Building the Tree</h2>
            <p>Behavior Trees always start with a root node.</p>
            <CodeSnippet
                code={`BreansBT.BTNode root = new BreansBT.SelectorNode(
    // Sequence 1
    new BreansBT.SequenceNode(
        new BreansBT.TimerNode(1.0), // wait 1 second
        new BreansBT.SelectorNode(
            // Sequence 1.1
            new BreansBT.SequenceNode(
                new BreansBT.ConditionNode(() -> BreansBT.Fx.Chance(0.7)),
                new BreansBT.ActionNode(() -> System.out.println("Layer 3 - First sequence succeeded!"))
            ),
            // Sequence 1.2
            new BreansBT.SequenceNode(
                new BreansBT.ConditionNode(() -> BreansBT.Fx.Chance(0.4)),
                new BreansBT.ActionNode(() -> System.out.println("Layer 3 - Second sequence succeeded!"))
            )
        )
    ),
    // Sequence 2
    new BreansBT.SequenceNode(
        new BreansBT.TimerNode(2.0), // wait 2 seconds
        new BreansBT.ConditionNode(() -> BreansBT.Fx.Chance(0.3)),
        new BreansBT.ActionNode(() -> System.out.println("Layer 1 - Second sequence succeeded!"))
    )
);`}
                language='javascript'
            />
        </div>

        <div id="section-2" className="mt-12">
            <h2>Node Types</h2>
            <p><strong>SelectorNode: </strong>Tries each child node from left to right and stops when one succeeds.
            Think of it as: "Do the first thing that works."</p>

            <p><strong>SequenceNode: </strong>
                Runs its children in order, one after the other.
                Fails immediately if one child fails, otherwise succeeds when all succeed.
                Think of it as: "Do all these steps in order."</p>

            <p><strong>TimerNode(double seconds): </strong>Waits for a certain time before succeeding.
                Parameter: 1.0 means wait 1 second, 2.0 means wait 2 seconds.
                Example: simulating an AI waiting before making a choice.</p>

            <p><strong>ConditionNode(BooleanSupplier condition): </strong>Runs a small function to check if something is true.
                In the example:</p>
            
            <CodeSnippet
                code={`() -> BreansBT.Fx.Chance(0.7)`}
                language='javascript'
            />
            <p>Means it returns true 70% of the time.</p>
            <p><strong>ActionNode(Runnable action): </strong>Runs a function when reached. Example:</p>
            <CodeSnippet
                code={`() -> System.out.println("Layer 3 - First sequence succeeded!")`}
                language='javascript'
            />
            <p>Prints a message when this node is executed.</p>
        </div>

        <div id="section-3" className="mt-12">
            <h2>Example Tree Structure</h2>
            <div class="DocImg">
                    Visual of the Example Behavior Tree
                    <img src={TreeExample} alt="AI Behavior Tree"/>
            </div>
        </div>

        <div id="section-4" className="mt-12">
            <h2>Running the Tree</h2>
            <CodeSnippet
                code={`while (true) {
    BreansBT.Status status = root.tick();
    System.out.println("BT Status: " + status);
    if (status != BreansBT.Status.RUNNING) {
        System.out.println("Behavior Tree finished with status: " + status);
        break;
    }
    Thread.sleep(200);
}`}
                language='javascript'
            />
            <div className="DocInfo">
                <img src={InfoIcon} alt="Info Icon"/>
                <p>
                <strong>tick():</strong> Runs one step of the tree and returns a status:
                </p>
            </div>
            <p>SUCCESS: Node completed successfully.</p>
            <p>FAILURE: Node failed.</p>
            <p>RUNNING: Node is still working (like a timer).</p>
            <div className="DocInfo">
                <img src={InfoIcon} alt="Info Icon"/>
                <p>
                <strong>Thread.sleep(200): </strong> Pauses for 0.2 seconds between ticks so the loop doesn’t run instantly.
                </p>
            </div>
        </div>
        
    </div>
  )
}

export default DocTree