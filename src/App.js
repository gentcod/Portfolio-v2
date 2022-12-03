import { Routes, Route } from 'react-router-dom';

import Navigation from './components/navigation/navigation.component';
import Home from './routes/home/home.component';

import './App.css';
import './sass/main.scss'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Navigation/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
