import './App.css';
import ClearPath from './components/ClearPath';
import Footer from './components/Footer';
import Frequently from './components/Frequently';
import InterestedCard from './components/InterestedCard';
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
      <Transparency />
      {/* <Frequently/> */}
      <InterestedCard />
      <Footer/>
    </>
  );
}

export default App;
