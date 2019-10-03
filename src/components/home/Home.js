import React from 'react';
import scuba from '../../images/scuba2.jpg';
//Components
import Produkt from '../produkter/Produkt';
import Rejse from '../rejser/Rejse';
import './Home.css'
import Certifikat from '../kurser/Certifikat';


const Home = () => {
    return (
        <div>

           <figure className="scuba__container">
               <img src={scuba} alt="Scuba"/>
               <div className="scuba__text">
                   <h2>The best way to observe a fish is to become a fish.</h2>
                   <p>Jacques cousteau</p>
               </div>
           </figure>

           <main className="main__wrapper">
               <Produkt/>
               <Rejse/>
               <Certifikat/>
           </main>

        </div>
    )
}

export default Home;
