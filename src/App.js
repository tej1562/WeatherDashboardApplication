import logo from './logo.svg';
import './App.css';
import Search from './Components/Search';
import Home from './Components/Home';
import WeatherContext from './Context/WeatherContext';

function App() {
  return (
    <WeatherContext>
       <Home/>
    </WeatherContext>
  );
}

export default App;
