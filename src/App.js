import BasicNav from './components/BasicNav';
import Home from './routes/Home'
import Links from './routes/Links'
import './App.css';
import { Route , Routes} from 'react-router-dom';
import Languages from './routes/Languages';

function App() {
  return (
    <div className="App">
      <BasicNav color={'dark'} dark={true} container={'fluid'}/>
      <Routes>
        <Route path="/" element={<Home role="Senior Software Engineer" employer="ASRC Federal"/>} />
        <Route path="/links" element={<Links />} />
        <Route path="/projects" element={<Links />} />
        <Route path="/languages" element={<Languages />} />
      </Routes>
    </div>
  );
}

export default App;
