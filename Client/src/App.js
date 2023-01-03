import Welcome from './Components/Welcome';
import Test from "./Components/Test"
import {Route, Routes} from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />}/>
        <Route path="/test" element={<Test />}/>
      </Routes>
    </div>
  );
}

export default App;
