import React from 'react';
import './Footer.css'

const Footer = () => {


    return (
        <div>
            <footer className="col-lg-12 col-md-12 col-12 p-4">

                <div className="row">
                <section className="col-lg-2 col-md-4 col-12 offset-lg-2 p-4">
                    <h6>PRAKTISKE OPLYSNINGER </h6>
                    <p>Om Scuba Living</p>
                    <p>Kontakt</p>
                    <p>Handelsbetingelser</p>
                    <p>Persondatapolitik</p>
                    <p>Åbningstider</p>
                </section>

                <section className="col-lg-2 col-md-4 col-12 p-4">
                   <h6>PRAKTISKE OPLYSNINGER </h6>
                   <p>Hovedkategorier</p>
                   <p>Dykkerudstyr</p>
                   <p>Dykkerrejser</p>
                   <p>Dykkerkurser</p>
                   <p>Service</p>
                </section>

                <section className="col-lg-2 col-md-4 col-12 p-4">
                    <h6>SOCIALE MEDIER - FØLG OS HER:</h6>

                    <div className="medier__container">
                        <div className="medier__text">
                            <p>Linkedin</p>
                        </div>
                        <div className="medier__icon">
                            <i class="fab fa-2x fa-linkedin"></i>
                        </div>
                    </div>

                    <div className="medier__container">
                        <div className="medier__text">
                            <p>Facebook</p>
                        </div>
                        <div className="medier__icon">
                            <i class="fab fa-2x fa-facebook-square"></i>
                        </div>
                    </div>

                    <div className="medier__container">
                        <div className="medier__text">
                            <p>Instagram</p>
                        </div>
                        <div className="medier__icon">
                        <i class="fab fa-2x fa-instagram"></i>
                        </div>
                    </div>

                </section>
                
                </div>

            </footer>
        </div>
    )
}

export default Footer;
