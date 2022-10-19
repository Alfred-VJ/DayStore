import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getCity, reset } from '../../redux/actions';

const DropdownCom = () => {
    const { ciudades } = useSelector(state => state);
    const dispatch = useDispatch();

    const selectCity = (id) => {
        console.log(id)
        dispatch(getCity(id));
    }

    const allCities = () => {
     dispatch(reset())
    }
    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle className='btn__dorp' id="dropdown-basic">
                    Elige por ciudad
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={allCities} > Todas las Ciudades </Dropdown.Item>
                    {
                        ciudades && ciudades.map(e => <Dropdown.Item
                            onClick={() => selectCity(e.id)}
                        >
                            {e.ciudad}
                        </Dropdown.Item>
                        )
                    }
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default DropdownCom