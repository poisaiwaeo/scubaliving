import React from 'react';
import om from '../../images/om.jpg';
import './Omos.css';


const Omos = () => {

    return (
        <div>

            <figure className="om__container">
                <img src={om} alt="Dykning" />
                <div className="om__text">
                    <h2>Du kan læse om os her</h2>
                    <p>Vi har nogle dygtige medarbejder med mange års erfaring</p>
                </div>
            </figure>

            <article className="col-lg-6 col-md-6 col-12  offset-lg-3 offset-md-3 offset-0 omos__text">
                <h2 className="text-center">Om os</h2>
                <p className="text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ea reiciendis qui accusantium animi dolores amet voluptas, expedita fuga aut sed saepe quam nobis pariatur harum officiis voluptatum eius velit?</p>
            </article>

        </div>
    )
}

export default Omos
