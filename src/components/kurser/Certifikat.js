import React, {useState } from 'react'
import Dykkerkurser from '../dykkerkurser/Dykkerkurser';
import { Link } from 'react-router-dom';
import './Kurser.css'


const Certifikat = () => {

    const [ kurser, setKurser] = useState([

        { kurserimg: "padi.png", kursertitel: "TAG ET INTERNATIONALT ANERKENDT DYKKERCERTIFIKAT", kursertekst1: "Her finder du et stort udvalgt af dykkerkurser lige fra begynder til professionel. Vi er et af Danmarks førende dykkercentre,som uddanner  fra PADI organisationen. Når du vælger at tage et dykkercertifikat hos os, får du ikke kun et internationalt anerkendt dykkercertifikat til markedets bedste priser, du får også et dykkerkursus, hvor kvaliteten er i top.", kursertekst2: "Vi har kompetente instruktører på vores dykkerkurser. Erfaring, tillid og sikkerhed er vigtigt, når du dykker med os, derfor stå vi klar med et stort hold af kompetente instruktører.", id: 1 }
    ]);

    const allekurser = kurser.map(k => {
        return (
        
           <div className=" col-lg-12 col-md-12 col-12" key={k.id}>
                <div className="card mb-4 shadow-sm">
                    <section className="col-lg-12 col-md-12 col-12 d-flex flex-wrap">

                    <div className="card-body col-lg-8 col-md-6 col-12 text-left justify-content-start align-items-center p-lg-5">
                        <h4 className="card-text"> {k.kursertitel} </h4>
                        <p className="card-text">  {k.kursertekst1} </p>
                        <p className="card-text">  {k.kursertekst2} </p>
                    </div>

                    <figure className="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center m-0">
                        <img className="img-fluid" src={"/assets/kurserimg/" + k.kurserimg} alt="Kurser" />
                    </figure>

                    </section>
                </div>
            </div>

            
        );
    });





    return (
        <div>

        <section className="col-lg-12 mt-4 mb-4 card__container">
                    <div className="row">
                        <section className="col-lg-6 col-md-6 col-12 card__rubrik">
                            <h5>PADI - DYKKERCEERITFIKAT</h5>
                        </section>
                    </div>
                </section>

                <section className="row">
                    {allekurser}
                </section>

                <section className="col-12 mt-2 mb-4 d-flex justify-content-center align-items-center p-2">
                    <Link className="text-dark" to="/dykkerkurser"> <h3>SE ALLE KURSER OG CERIFIKATER HER!</h3> </Link>
        </section>

        </div>
    )
}

export default Certifikat
