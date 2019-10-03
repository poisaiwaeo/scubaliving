import React, { useState } from 'react';
import Dykkerudstyr from '../dukkerudstyr/Dukkerudstyr';
import { Link } from 'react-router-dom';
import './Produkt.css'


const Produkt = () => {

    const [produkt, setProdukt] = useState([

        { produktimg: "reg.png", produkttitel: "REGULATOR MED RESIST", produktpris: "KR. 899,-", id: 1 },
        { produktimg: "fine.png", produkttitel: "REJSEFINNE", produktpris: "KR. 999,-", id: 2 },
        { produktimg: "fine.png", produkttitel: "REJSEFINNE", produktpris: "KR. 999,-", id: 3 },
        { produktimg: "hanske.png", produkttitel: "COLDWATER GLOVES", produktpris: "KR. 1499,-", id: 4 },
    ]);

    const alleProdukt = produkt.map(p => {
        return (

            <div className=" col-lg-3 col-md-6 col-12" key={p.id}>
                <div className="card mb-4  shadow-sm">
                    <img className="img-fluid" src={"/assets/produktimg/" + p.produktimg} alt="Produkter" />
                    <div className="card-body">
                        <h4 className="card-text d-flex justify-content-center"> {p.produkttitel} </h4>
                        <p className="card-text d-flex justify-content-center">  {p.produktpris} </p>
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
                            <h5>MEST POPULÆRE DYKKERUDSTYR</h5>
                        </section>
                    </div>
                </section>

                <section className="row">
                    {alleProdukt}
                </section>

                <section className="col-12 mt-2 mb-4 d-flex justify-content-center align-items-center p-2">
                    <Link className="text-dark" to="/dykkerudstyr"> <h3>SE MERE LÆKKERT UDSTYR HER!</h3> </Link>
                </section>

        </div>

    );
};

export default Produkt;
