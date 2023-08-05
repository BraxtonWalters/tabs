import './App.css';
import Tabs from './components/Tabs';

function App() {
  // list 
  const list = [
  "", 
  "awdawdw", 
  "awdawdawd"
  
  ]

  return (
    <div className="App">
      <Tabs contentList={list}/>
    </div>
  );
}

export default App;
