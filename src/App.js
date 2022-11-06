// import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/Counter';
import {Route, Routes, Link, BrowserRouter as Router} from 'react-router-dom'; 
import About from './components/about/About';
import Gallery from './components/gallery/Gallery';
 
function App() {
  return (
    // <div className="">
    //   <Counter title="Profile" value={1} image="images/profile.jpg"/>
    //   <Counter title="Cat" value={1} image="images/supcat.jpg"/>
    // </div>

    <Router>
      <nav className="navbar navbar-expand navbar-brand m-2">
        <ul className="navbar-nav">
          <li>
            <Link className="nav-link" to="/home">Home</Link>
          </li>
          <li>
            <Link className="nav-link" to="/counter">Counter</Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li>
            <Link className="nav-link" to="/gallery">Gallery</Link>
          </li>
        </ul>
      </nav>
      <div className="m-4">
        <Routes>
          <Route path="/counter" element={<Counter/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/gallery" element={<Gallery/>}></Route>
          <Route path="/home" ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
 