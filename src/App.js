import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/navbar';
import HomeScreen from './Screen/HomeScreen/homeScreen';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeScreen />
    </div>
  );
}

export default App;
