import React from 'react';
import kontakt from '../../images/kontakt.jpg';
import './Kontakt.css';



const Kontakt = () => {
    return (
        <div>


            <figure className="kontakt__container">
                <img src={kontakt} alt="Dykning" />
                <div className="kontakt__text">
                    <h2>Kontakt os her</h2>
                    <p>Du er velkommen til at kontakte os</p>
                </div>
            </figure>

            <div className="col-lg-12 col-md-12 col-12 d-flex flex-wrap kontakt__container">

                <section className="col-lg-6 col-md-6 col-12 kontakt__oplysninger card mb-4 shadow-sm">
                    <h2>Kontakt os</h2>
                    <p>E-mail:<a className="kontakt" href="mailto:xxx@example.com"> xxxxx@gmail.com </a> </p>
                    <p>Telf: <a className="kontakt" href="tel:+45xxxxxxxx">+45 xx xx xx xx</a> </p>
                    <p>Adresse: Grenaa xx, Danmark</p>
                </section>

                <section className="col-lg-6 col-md-6 col-12 d-flex justify-content-center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2272206.180962873!2d9.300302170435268!3d56.20979948987892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464b27b6ee945ffb%3A0x528743d0c3e092cd!2sDanmark!5e0!3m2!1sda!2sdk!4v1570092765237!5m2!1sda!2sdk" width="600" height="450" frameborder="0" allowfullscreen=""></iframe>
                </section>



            </div>

        </div>
    )
}

export default Kontakt
