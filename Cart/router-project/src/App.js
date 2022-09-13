import logo from './logo.svg';
import './App.css';
import { AllRoutes } from './Pages/AllRoutes';
import { Navbar } from './Components/Nav';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
