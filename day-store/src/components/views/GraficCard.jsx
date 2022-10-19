import React from 'react';
import {Card} from 'react-bootstrap';
import {DoughnutChart} from '../../charts/DoughnutChart';

const GraficCard = (props) => {
  return (
 <div className='__Card'>
   <Card className='__CardUp'>
    <h3 className='title__Card'>{props.ciudad}</h3>
   <Card className='cont__card'>
       <DoughnutChart options={{
          chart: {
            type: 'donut',
            foreColor: '#FFF',

          },
          //colores de porcentaje de grafica
          dataLabels: {
            style: {
              colors: ['#FFF', '#FFF']
            }
          },
          //colores de fondo de grafica
        //   fill: {
        //     colors: ['#F44336', '#E91E63']
        //   },
         
          dropShadow: {
            enabled: true,
            top: 0,
            left: 0,
            blur: 3,
            opacity: 0.5
          },

          labels: [ `Servicio`, `Faltante`],
          //Cambiar colores de grafica y points 
          colors: props.colorGraf,
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
                // colors: ['#F44336', '#E91E63'],
              },

              legend: {
                position: 'bottom'
              },
            }
          }]
        }}
        series={[props.servicio, props.meta - props.servicio]}/>
    <Card.Body>
      <Card.Title className='m-3'>{props.ciudad}</Card.Title>
      <Card.Text>
        <ul>
            <li>{`Meta: Se requieren ${props.meta} para alcanzar la meta propuesta.`}</li>
            <li>{`Servicio: Se alcanzaron ${props.servicio} de los ${props.meta}`}</li>
        </ul>
      </Card.Text>
    </Card.Body>
  </Card>
   </Card>
 </div>
  )
}

export default GraficCard;