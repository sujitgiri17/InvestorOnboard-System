import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Pricing from './Pricing';
import Eduction from './Eduction';

import Navbar from '../Navbar';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';

function HomePage() {
    return ( 
        <>
       

         <Hero />
         <Awards />
         <Pricing />
         <Eduction />
         <OpenAccount />
         
        </>
     );
}

export default HomePage;