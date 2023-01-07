import React ,{useState}from 'react'
import SignIn from './components/signin/SignIn';
import SignUpStartup from 'components/signup/SignUpStartup';
import SignUpInvestor from 'components/signup/SignUpInvestor';
import Home from './components/landing'
import Home2 from './components/landing2'
import Startups from 'components/startups/Startups';
import Investors from 'investors/Investors';


function App() {
  return (
    // <div className="">     
    //   <SignIn/>
    //   {/* <SignUpStartup />
    //   <SignUpInvestor/> */}
    // </div>
    //  < className=' text-white'>
    //   <Home/>
      
    //   {/* <Home2/> */}
    //   <footer class="bg-blue-900 text-xs">© Seedy, Copyright 2023</footer>
      // <Startups/>
      <Investors/>
      
    
  );
}

export default App;
