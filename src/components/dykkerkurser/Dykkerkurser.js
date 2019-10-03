import React, { useState } from 'react';
import kurser from '../../images/kurser.jpg';
import './Dykkerkurser.css';



const Dykkerkurser = () => {

    const [dykkerkurser, setDykkerkurser] = useState([

        { dykkerkurserimg: "padi01.png", kursertitel: "TAG ET INTERNATIONALT ANERKENDT DYKKERCERTIFIKAT", kursertekst1: "Her finder du et stort udvalgt af dykkerkurser lige fra begynder til professionel. Vi er et af Danmarks førende dykkercentre,som uddanner  fra PADI organisationen. Når du vælger at tage et dykkercertifikat hos os, får du ikke kun et internationalt anerkendt dykkercertifikat til markedets bedste priser, du får også et dykkerkursus, hvor kvaliteten er i top.", kursertekst2: "Vi har kompetente instruktører på vores dykkerkurser. Erfaring, tillid og sikkerhed er vigtigt, når du dykker med os, derfor stå vi klar med et stort hold af kompetente instruktører.", id: 1 }
    ]);

    const alleDykkerkurser = dykkerkurser.map(x => {
        return (

            <div className=" col-lg-12 col-md-12 col-12" key={x.id}>
                <div className="card mb-4 shadow-sm">
                    <section className="col-lg-12 col-md-12 col-12 d-flex flex-wrap">

                        <div className="card-body col-lg-8 col-md-6 col-12 text-left justify-content-start align-items-center p-lg-5">
                            <h4 className="card-text"> {x.kursertitel} </h4>
                            <p className="card-text">  {x.kursertekst1} </p>
                            <p className="card-text">  {x.kursertekst2} </p>
                        </div>

                        <figure className="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center m-0">
                            <img className="img-fluid" src={"/assets/dykkerkurserimg/" + x.dykkerkurserimg} alt="Dykkerkurser" />
                        </figure>

                    </section>
                </div>
            </div>


        );
    });




    return (
        <div>

            <figure className="udstyr__container">
                <img src={kurser} alt="Dykkerkurser" />
                <div className="udstyr__text">
                    <h2>Finde din dykkerkurser her</h2>
                    <p>Vi underviser dig om dykning helt fra bunden</p>
                </div>
            </figure>

            <main>

                <section className="row">
                    {alleDykkerkurser}
                </section>

                <section className="row">
                    {alleDykkerkurser}
                </section>

            </main>



        </div>
    )
}

export default Dykkerkurser;
