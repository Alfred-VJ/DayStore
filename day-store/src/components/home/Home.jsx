import './Home.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCities } from '../../redux/actions';
import PrintPdf from '../views/GraficCard';
import { Col, Row } from 'react-bootstrap'
import DropdownCom from '../views/DropdownCom';

const Home = () => {
  const { ciudades, city } = useSelector(state => state);
  const dispatch = useDispatch();
  const colorGraf = [['#ffa43a', '#75c7ff'], ['#68da3e', '#416864'], ['#b93af8', '#d6ebc1'], ["#c8ad8d", "#273a2d"]]
  let numero = -1;
  console.log({ ciudades, city });

  useEffect(() => {
    dispatch(getAllCities());
  }, [])


  return (
    <div className='cont__graficas'>
      <div>
        <div className='title__ciudades'>
          <h1 className='grafic_h1'>Ciudades DayStore</h1>
          <DropdownCom />
        </div>
        <hr className='hrGrafic' />
        <Row className="content__graficCard">
          {
            ciudades && !city.length ? ciudades.map(e => {
              if (numero > 3) numero = 0;
              else ++numero
              return <Col>
                <PrintPdf
                  ciudad={e.ciudad}
                  meta={e.meta}
                  servicio={e.servicio}
                  colorGraf={colorGraf[numero]}

                />
              </Col>
            })
              :
              city.map(e =>
                <Col>
                  <PrintPdf
                    ciudad={e.ciudad}
                    meta={e.meta}
                    servicio={e.servicio}
                    colorGraf={colorGraf[1]}
                  />
                </Col>)
          }
        </Row>
      </div>
    </div>
  )
}

export default Home