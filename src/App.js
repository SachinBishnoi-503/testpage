import './App.css';
import ClearPath from './components/ClearPath';
import StopPaying from './components/StopPaying';
import Transparency from './components/Transparency';
import WebservsCards from './components/WebservsCards';
import WhyWebserv from './components/WhyWebserv';

function App() {
  return (
    <>
      <StopPaying />
      <WhyWebserv />
      <WebservsCards />
      <ClearPath />
      <Transparency/>
    </>
  );
}

export default App;
