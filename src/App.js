import { Routes, Route } from 'react-router-dom';

import Navigation from './components/navigation/navigation.component';
import Home from './routes/home/home.component';

import './App.css';
import './sass/main.scss'
import Contact from './routes/contact/contact.component';
import Explore from './routes/explore/explore.component';
import About from './routes/about/about.component';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Navigation/>}>
          <Route index element={<Home/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='explore' element={<Explore/>}/>
          <Route path='about' element={<About/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
