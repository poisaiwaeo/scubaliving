import React, { useState } from 'react';
import dukkermaske from '../../images/dukkermaske.jpg';
/*import Produkt from '../produkter/Produkt';*/
import './Dykkerudstyr.css'


const Dukkerudstyr = () => {


    const [udstyr, setUdstyr] = useState([

        { udstyrimg: "ur.png", udstyrtitel: "Dykkerur", udstyrpris: "KR. 599,-", id: 1 },
        { udstyrimg: "fine.png", udstyrtitel: "REJSEFINNE", udstyrpris: "KR. 999,-", id: 2 },
        { udstyrimg: "hanske.png", udstyrtitel: "COLDWATER GLOVES", udstyrpris: "KR. 1499,-", id: 3 },
        { udstyrimg: "reg.png", udstyrtitel: "REGULATOR MED RESIST", udstyrpris: "KR. 899,-", id: 4 },
        { udstyrimg: "reg.png", udstyrtitel: "REGULATOR MED RESIST", udstyrpris: "KR. 899,-", id: 5 },
        { udstyrimg: "fine.png", udstyrtitel: "REJSEFINNE", udstyrpris: "KR. 999,-", id: 6 },
        { udstyrimg: "fine.png", udstyrtitel: "REJSEFINNE", udstyrpris: "KR. 999,-", id: 7 },
        { udstyrimg: "ur.png", udstyrtitel: "Dykkerur", udstyrpris: "KR. 599,-", id: 8 }
        
    ]);

    const alleUdstyr = udstyr.map(u => {
        return (

            <div className=" col-lg-3 col-md-6 col-12" key={u.id}>
                <div className="card mb-4  shadow-sm">
                    <img className="img-fluid" src={"/assets/udstyrimg/" + u.udstyrimg} alt="Produkter" />
                    <div className="card-body">
                        <h4 className="card-text d-flex justify-content-center"> {u.udstyrtitel} </h4>
                        <p className="card-text d-flex justify-content-center">  {u.udstyrpris} </p>
                    </div>
                </div>
            </div>
        );
    });

    

    return (
        <div>
            
        <figure className="udstyr__container">
               <img src={dukkermaske} alt="Dykkermaske"/>
               <div className="udstyr__text">
                   <h2>Finde din dykkerudstyr her</h2>
                   <p>Vi har forskellige dykkerudstyr til dig</p>
               </div>
        </figure>

        <main className="main__wrapper">

            <section className="row">
                {alleUdstyr }
            </section>
            
        </main>

        </div>
    )
}

export default Dukkerudstyr;
