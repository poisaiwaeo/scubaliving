import React, { useState } from 'react';
import Dykkerrejser from '../dykkerrejser/Dykkerrejser';
import { Link } from 'react-router-dom';
import './Rejse.css';


const Rejse = () => {

    const [rejse, setRejse] = useState([

        { rejseimg: "malta.jpg", rejsetitel: "MALTA", rejsetekst: "Oplev skørne malta og det helt fantastiske dyreliv og sammenhold, Vi arrangerer dykkerejser til Malta hele året rundt.", id: 1 },
        { rejseimg: "norge.jpg", rejsetitel: "NORGE", rejsetekst: "Nordeurapas bedste dykkersports ligger i Norge. Vi har 25 års erfaring med dyk i Norge. Oplev det klarest vand i verden!", id: 2 }
    ]);

    const alleRejse = rejse.map(r => {
        return (

            <div className=" col-lg-6 col-md-6 col-12" key={r.id}>
                <div className="card mb-4  shadow-sm">
                    <img className="img-fluid p-4" src={"/assets/rejseimg/" + r.rejseimg} alt="Rejser" />
                    <div className="card-body card__text">
                        <h4 className="card-text d-flex justify-content-start"> {r.rejsetitel} </h4>
                        <p className="card-text d-flex justify-content-start">  {r.rejsetekst} </p>
                    </div>
                </div>
            </div>
        );
    });




    return (
        <div>

            <section className="col-lg-12 mt-4 mb-4 card__container">
                <div className="row">
                    <section className="col-lg-6 col-md-6 col-12 card__rubrik">
                        <h5>DYK UD I VERDEN</h5>
                    </section>
                </div>
            </section>

            <section className="row">
                {alleRejse}
            </section>

            <section className="col-12 mt-2 mb-4 d-flex justify-content-center align-items-center p-2">
                <Link className="text-dark" to="/dykkerrejser"> <h3>SE FLERE DESTINATIONER OG MULIGHEDER HER!</h3> </Link>
            </section>

        </div>
    )
}

export default Rejse;
