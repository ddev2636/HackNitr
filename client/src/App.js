import React from 'react'
import SignIn from './components/signin/SignIn';
import SignUpStartup from 'components/signup/SignUpStartup';
import SignUpInvestor from 'components/signup/SignUpInvestor';
import Home from './components/landing'
import Home2 from './components/landing2'
import Nav from './components/navbar'
function App() {
  return (
    // <div className="">     
    //   {/* <SignIn/> */}
    //   {/* <SignUpStartup/> */}
    //   <SignUpInvestor/>
    // </div>
     <div className=' text-white'>
      <Nav/>
      
      <Home/>
      <Home2/>
      <footer class="bg-blue-900 text-xs">© Seedy, Copyright 2023</footer>
    </div>
  );
}

export default App;
