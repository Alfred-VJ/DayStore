import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCities, getCity, reset } from '../../redux/actions';

const DropdownCom = (props) => {
    const { ciudades } = useSelector(state => state);
    const dispatch = useDispatch();

    const selectCity = (id) => {
        console.log(id)
        dispatch(getCity(id));
        setTimeout(() => {
            dispatch(getCity(id));
        }, 1000)
    }

    const allCities = () => {
        dispatch(reset())
        dispatch(getAllCities())
    }
    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle className='btn__dorp' id="dropdown-basic">
                    {props.title}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={allCities} > Todas las opciones </Dropdown.Item>
                    {
                        props.data.map(e => <Dropdown.Item
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