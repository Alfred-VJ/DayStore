import './Home.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCities } from '../../redux/actions';
import PrintPdf from '../views/GraficCard';
import { Col, Row, Spinner } from 'react-bootstrap'
import DropdownCom from '../views/DropdownCom';
import PrintPdfP from '../views/GraficaPrincipal';

const Home = () => {
  const [values, setValues] = useState({})
  const { ciudades, city, views } = useSelector(state => state);
  const dispatch = useDispatch();
  const colorGraf = [['#ffa43a', '#75c7ff'], ['#68da3e', '#416864'], ['#b93af8', '#d6ebc1'], ["#c8ad8d", "#273a2d"]]
  let numero = -1;
  const options = {
    chart: {
      type: 'donut',
      foreColor: '#FFF',
    },
    labels: values.ciudadG,
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
    }],
    colors: ['#EB984E', '#F8C471', '#F9E79F', '#17A589', '#839192', '#D7BDE2', "#58D68D", "#F1C40F"],
  }

  const series = values.servicioG
  const labels = values.metG

  useEffect(() => {
    dispatch(getAllCities());
  }, []);

  useEffect(() => {
    if (ciudades) {
      let total = 0;
      let totalSer = 0;
      ciudades?.map(e => total += e.meta)
      ciudades?.map(e => totalSer += e.servicio)
      setValues({
        metG: [total, ...ciudades.map(e => e.meta)],
        servicioG: [...ciudades.map(e => e.servicio), total - totalSer],
        ciudadG: [...ciudades.map(e => e.ciudad), "Faltante"],
        total,
        totalSer
      })
    }
  }, [ciudades])
  return (
    <div className='cont__graficas'>
      {
        ciudades?.length ?
          <div>
            <div className='title__ciudades'>
              <h1 className='grafic_h1'>Ciudades DayStore</h1>
              <DropdownCom
                title="Opciones de vista"
                data={ciudades}
              />
            </div>
            <hr className='hrGrafic' />
            {
              values?.ciudadG && !views ? <PrintPdfP
                labels={labels}
                series={series}
                options={options}
                city={city}
                values={values}
              />
                :
                <Row className="content__graficCard">
                  {
                    ciudades && !city.length ? ciudades.map(e => {
                      if (numero > 3) numero = 0;
                      else ++numero
                      return <Col key={e.id+"colV"}>
                        <PrintPdf
                          ciudad={e.ciudad}
                          meta={e.meta}
                          servicio={e.servicio}
                          colorGraf={colorGraf[numero]}
                          id={e.id}
                        />
                      </Col>
                    })
                      :
                      city.map(e =>
                        <Col key={e.id+"colS"}>
                          <PrintPdf
                            ciudad={e.ciudad}
                            meta={e.meta}
                            servicio={e.servicio}
                            colorGraf={colorGraf[1]}
                            id={e.id}
                          />
                        </Col>)
                  }
                </Row>
            }

          </div>
          :
          <div className='spinerHome' style={{ height: "100vh" }}>
            <Spinner animation="border" variant='info' style={{height:"30vh", width:"30vh", marginTop:'20%', marginLeft:'40%'}}/>
          </div>
      }
    </div>
  )
}

export default Home