import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ReservationItem from './components/ReservationItem';
import FilterBtn from './components/FilterBtn';
import DisplayGrid from './components/DisplayGrid'

const restaurantList = [
{
    name: "Sample Restaurant1",
    image: "Image",
    time: "1:00 PM",
    citystate: "Atlanta/GA",
    date: "11/20",
    guests: "3",
},
{
  name: "Sample Restaurant2",
  image: "Image",
  time: "3:00 PM",
  citystate: "Orlando/FL",
  date: "10/14",
  guests: "2",
},
{
  name: "Sample Restaurant3",
  image: "Image",
  time: "11:00 AM",
  citystate: "Athens/GA",
  date: "11/28",
  guests: "6",
},
{
  name: "Sample Restaurant4",
  image: "Image",
  time: "6:00 PM",
  citystate: "Charlotte/NC",
  date: "11/20",
  guests: "3",
},
]

function App() {
  return (
    <body>
      <Navbar/>
      <FilterBtn/>
      <DisplayGrid items={restaurantList}/>
    </body>
  );
}

export default App;
