import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ReservationItem from './components/ReservationItem';
import FilterBtn from './components/FilterBtn';

function App() {
  return (
    <body>
      <Navbar/>
      <FilterBtn/>
      <ReservationItem/>
    </body>
  );
}

export default App;
