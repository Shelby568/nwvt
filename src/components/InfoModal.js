import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheck, faCar, faMotorcycle, faCaravan, faTruck, faTractor, faTruckMonster, faShip,
    faPlane, faHelicopter
} from '@fortawesome/free-solid-svg-icons';
import '../styles/InfoModal.css';

const InfoModal = () => (
    <div className="info-modal">
     <h5>Our trackers are supplied and can be fitted to all makes and models of vehicles by our experienced engineers. With prices starting as little as £99, it's now easier than ever to keep your vehicle secure! </h5>
     <h5 className="info"><FontAwesomeIcon className="check" icon={faCheck} size="2x" /> GPS location tracking with 24 hour monitoring </h5>
     <h5 className="info"><FontAwesomeIcon className="check" icon={faCheck} size="2x" /> Real time tracking technology</h5>
     <h5 className="info"><FontAwesomeIcon className="check" icon={faCheck} size="2x" /> Vehicle movement alert</h5>
     <h5 className="info"><FontAwesomeIcon className="check" icon={faCheck} size="2x" /> Battery disconnect alert</h5>
     <h5 className="info"><FontAwesomeIcon className="check" icon={faCheck} size="2x" /> User friendly app compatible with all smartphones</h5>

     <h6 className="compatible">Compatibility:</h6>
         <FontAwesomeIcon className="compatible" icon={faCar} size="2x" />
         {' '}
         <FontAwesomeIcon className="compatible" icon={faMotorcycle} size="2x" />
         {' '}
         <FontAwesomeIcon className="compatible" icon={faCaravan} size="2x" />
         {' '}
         <FontAwesomeIcon className="compatible" icon={faTruck} size="2x" />
         {' '}
         <FontAwesomeIcon className="compatible" icon={faTractor} size="2x" />
         {' '}
         <FontAwesomeIcon className="compatible" icon={faTruckMonster} size="2x" />
         {' '}
         <FontAwesomeIcon className="compatible" icon={faShip} size="2x" />
         {' '}
         <FontAwesomeIcon className="compatible" icon={faPlane} size="2x" />
         {' '}
         <FontAwesomeIcon className="compatible" icon={faHelicopter} size="2x" />
    </div>
);
export default InfoModal;