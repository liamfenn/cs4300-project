import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ReservationItem from './components/ReservationItem';
import FilterBtn from './components/FilterBtn';
import Login from './components/Login';

function App() {
  return (
    <body>
      <Navbar/>
      <FilterBtn/>
      <ReservationItem/>
      <Login/>
    </body>
  );
}

export default App;
