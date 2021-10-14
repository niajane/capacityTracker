import './App.css';
import Chart from './components/Chart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Capacity Tracker</h1>
      </header>
      <body>
        <Chart data="hello"/>
      </body>
    </div>
  );
}


export default App;
