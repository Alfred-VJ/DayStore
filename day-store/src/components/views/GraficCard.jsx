import React, { forwardRef, useRef } from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import { DoughnutChart } from '../../charts/DoughnutChart';
import { useReactToPrint } from 'react-to-print';
import { saveAsPng, saveAsJpeg } from 'save-html-as-image';


const GraficCard = forwardRef((props, ref) => {
  const ii__gr = document.getElementById(props.id);
  const imp = (formato) => {
    formato === "png" ? saveAsPng(ii__gr) : saveAsJpeg(ii__gr);
  }

  return (
    <div ref={ref} className='__Card'>
      <Card className='__CardUp'>
        <div className='title__btn'>
          <h3 className='title__Card'>{props.ciudad}</h3>
          <Dropdown style={{ marginRight: '10px' }}>
            <Dropdown.Toggle className='btn__dorp' id="dropdown-basic">
              Imprimir
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {props.btn}
              <Dropdown.Item onClick={() => imp("png")}>Imprimir png</Dropdown.Item>
              <Dropdown.Item onClick={() => imp("jpg")}>Imprimir jpg</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </div>
        <Card className='cont__card'>
          <DoughnutChart options={{
            chart: {
              type: 'donut',
              foreColor: '#FFF',

            },
            dataLabels: {
              style: {
                colors: ['#FFF', '#FFF']
              }
            },

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
                  width: 320,
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
                <li>{`Meta: Se requieren ${props.meta} servicios para alcanzar la meta propuesta.`}</li>
                <li>{`Alcance: Se alcanzaron ${props.servicio} de los ${props.meta} servicios, faltando ${props.meta - props.servicio} para alcanzar la meta propuesta.`}</li>
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

  const atr = () => {
    setTimeout(() => {
      handlePrint()
    }, 100)
  }

  let btn = <Dropdown.Item onClick={atr}>Imprimir pdf</Dropdown.Item>
  return (
    <div id={props.id} style={{height:"100vh"}}>

      <GraficCard
        ref={componentRef}
        ciudad={props.ciudad}
        meta={props.meta}
        servicio={props.servicio}
        colorGraf={props.colorGraf}
        btn={btn}
        id={props.id}
      />
    </div>
  );
};

export default PrintPdf;