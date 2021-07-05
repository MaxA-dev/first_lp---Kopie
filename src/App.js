import Header from './components/Header';
import './App.css';

import Hero from './components/Hero';
import Footer from './components/Footer';
import Pricing from "./components/Pricing"
import Table from './components/Table';

function App() {
  var email1;
  const setEmail = (email) => {
    email1 = email;
    console.log(email1)
  }

  return (
   
      <div>
      <Header setEmail={setEmail}/>
      <Hero />
<Pricing  />
<Table email={email1}/>
      <Footer />
      </div>

     
      
      
      
    
  );
}

export default App;
