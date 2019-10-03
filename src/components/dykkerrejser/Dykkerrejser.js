import React, { useState } from 'react';
import rejser from '../../images/rejser.jpg';
import './Dykkerrejser.css';

const Dykkerrejser = () => {


    const [dykkerrejser, setDykkerrejser] = useState([

        { dykkerrejserimg: "malta.jpg", dykkerrejsertitel: "MALTA", dykkerrejsertekst: "Oplev skørne malta og det helt fantastiske dyreliv og sammenhold, Vi arrangerer dykkerejser til Malta hele året rundt.", id: 1 },
        { dykkerrejserimg: "norge.jpg", dykkerrejsertitel: "NORGE", dykkerrejsertekst: "Nordeurapas bedste dykkersports ligger i Norge. Vi har 25 års erfaring med dyk i Norge. Oplev det klarest vand i verden!", id: 2 },
        { dykkerrejserimg: "animal.jpg", dykkerrejsertitel: "Thailand", dykkerrejsertekst: "Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien.", id: 3 },
        { dykkerrejserimg: "divers.jpg", dykkerrejsertitel: "Maldiverne", dykkerrejsertekst: "Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien. ", id: 4 }
    ]);

    const alleDykkerrejser = dykkerrejser.map(y => {
        return (

            <div className=" col-lg-6 col-md-6 col-12" key={y.id}>
                <div className="card mb-4  shadow-sm">
                    <img className="img-fluid p-4" src={"/assets/dykkerrejserimg/" + y.dykkerrejserimg} alt="Rejser" />
                    <div className="card-body card__text">
                        <h4 className="card-text d-flex justify-content-start"> {y.dykkerrejsertitel} </h4>
                        <p className="card-text d-flex justify-content-start">  {y.dykkerrejsertekst} </p>
                    </div>
                </div>
            </div>
        );
    });






    return (
        <div>

            <figure className="udstyr__container">
                <img src={rejser} alt="Rejser" />
                <div className="udstyr__text">
                    <h2>Dykkerudstyr til hele verden</h2>
                    <p>Du kan skabe den bedste rejse, der passer til dit budget her</p>
                </div>
            </figure>

            <main className="main__wrapper">

                <section className="row">
                    {alleDykkerrejser}
                </section>

            </main>


        </div>
    )
}

export default Dykkerrejser
