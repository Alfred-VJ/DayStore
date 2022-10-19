import React, { forwardRef, useRef } from 'react';
import { Card, Button } from 'react-bootstrap';
import { DoughnutChart } from '../../charts/DoughnutChart';
import { useReactToPrint } from 'react-to-print';

const GraficCard = forwardRef((props, ref) => {
  return (
    <div ref={ref} className='__Card'>
      <Card className='__CardUp'>
        <div className='title__btn'>
        <h3 className='title__Card'>{props.ciudad}</h3>
        {props.btn}
        </div>
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

            labels: [`Servicio`, `Faltante`],
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
            series={[props.servicio, props.meta - props.servicio]} />
          <Card.Body>
            <Card.Title className='m-3'>{props.ciudad}</Card.Title>
            <Card.Text>
              <ul>
                <li>{`Meta: Se requieren ${props.meta} para alcanzar la meta propuesta.`}</li>
                <li>{`Alcance: Se alcanzaron ${props.servicio} de los ${props.meta}`}</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </Card>
    </div>
  )
})


const PrintPdf = (props) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
let btn = <Button style={{background:'none', border:'none'}} onClick={handlePrint}>Imprimir en pdf</Button>
  return (
    <div>
       
      <GraficCard
        ref={componentRef}
        ciudad={props.ciudad}
        meta={props.meta}
        servicio={props.servicio}
        colorGraf={props.colorGraf}
        btn={btn}
      />
    </div>
  );
};

export default PrintPdf;