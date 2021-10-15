import './App.css';
import Chart from './components/Chart';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {useState, useEffect} from 'react'
import { setDayOfYear } from 'date-fns/esm';

function App() {

  const options = [
    'one', 'two', 'three'
  ];
 
  //add show all

  const days = [
    {value: 1, label:'Sunday'}, 
    {value: 2, label:'Monday'},
    {value: 3, label:'Tuesday'},
    {value: 4, label:'Wednesday'}, 
    {value: 5, label:'Thursday'},
    {value: 6, label:'Friday'},
    {value: 7, label:'Saturday'},
  ]

  const [location, setLocation] = useState(options[0]);
  const [day, setDay] = useState(1);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Capacity Tracker</h1>
      </header>
      <body>
        <Dropdown options={options} onChange={setLocation} value={location} placeholder="Select an option" />
        <Dropdown options={days} onChange={(opt) => setDay(opt.value)} value={days[day-1]} placeholder="Select an option" />
        <Chart location={location} day={day}/>
      </body>
    </div>
  );
}


export default App;
