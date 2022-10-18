import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCities } from '../../redux/actions'

const Home = () => {
  const { ciudades } = useSelector(state => state.ciudades);
  const dispatch = useDispatch();
  console.log(ciudades);

  useEffect(() => {
    dispatch(getAllCities());
  }, [])

  return (
    <div>
      <Card>Primer card</Card>
      <div>
        {
          ciudades && ciudades.map(e => <>
          <h3>{e.ciudad}</h3>
          <h6>{e.servicio}</h6>
          <h6>{e.meta}</h6>
          <p>{e.id}</p>
          </>)
        }
      </div>

    </div>
  )
}

export default Home