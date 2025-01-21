
import './App.css'
import {Button} from "@heroui/react";
import Navberfull from './Components/Header';
import Hiro from './Components/Hiro';
import Vision from './Components/Vision';
import Offer from './Components/Offer';
import DebitCard from './Components/DebitCard';
import PerfectCard from './Components/PerfectCard';
import UserComment from './Components/UserComment';
import Faqs from './Components/Faqs';
import Footer from './Components/Footer';

function App() { 
  return (
    <>
       <Navberfull />
       <Hiro />
       <Vision />
       <Offer />
       <DebitCard />
       <PerfectCard />
       <UserComment />
       <Faqs />
       <Footer />
    </>
  )
}

export default App
