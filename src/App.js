import './App.css';
import './css/style.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import Docs from './pages/Docs';
import NN from './pages/NN';
import LinReg from './pages/LinReg';
import LogReg from './pages/LogReg';
import KMean from './pages/KMean';
import Markov from './pages/Markov';
import Tree from './pages/Tree';
import Projects from './pages/Examples';
import About from './pages/About';
import Navigator from './pages/Navigator';
import DataCheck from './pages/Datacheck';

function App() {

  return (
      <div className="container mx-auto px-4">
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/neuralnetwork" element={<NN />} />
            <Route path="/linearregression" element={<LinReg />} />
            <Route path="/logisticregression" element={<LogReg />} />
            <Route path="/kmeans" element={<KMean />} />
            <Route path="/markovchain" element={<Markov />} />
            <Route path="/behaviortree" element={<Tree />} />
            <Route path="/examples" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/navigator" element={<Navigator />} />
            <Route path="/datacheck" element={<DataCheck />} />
            
            
          </Routes>
        </HashRouter>
      </div>
  );
}

export default App;
