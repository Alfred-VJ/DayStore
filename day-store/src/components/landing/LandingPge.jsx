import React from 'react';
import { Button } from 'react-bootstrap';
import './Landing.css'
import img1 from '../../assests/imgLanding.jpg'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <div className='content__landing'>
            <img src={img1} alt="imagen1" className='imagenLanding' />
            <div className='text__landing'>
                <h1>Day</h1>
                <h1>Store</h1>
                <h3>Expertos en Almacenamiento y Logística</h3>
                <p>En Day Store tomamos en consignación sus productos y los almacenamos en nuestras bodegas gestionando la recolección, almacenamiento y entrega de su inventario.</p>
                <Link to='/DayStore/Home'><Button className='bnt-landing'>Iniciar</Button></Link>
            </div>
        </div>
    )
}

export default LandingPage