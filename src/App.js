import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/Counter';

function App() {
  return (
    <div className="">
      <Counter title="Profile" value={1} image="images/profile.jpg"/>
      <Counter title="Cat" value={1} image="images/supcat.jpg"/>
    </div>
  );
}

export default App;
 