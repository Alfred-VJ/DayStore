import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { getAllCities, getCity, reset, typeViews, viewsTrue } from '../../redux/actions';

const DropdownCom = (props) => {
    const dispatch = useDispatch();

    const selectCity = (id) => {
        if (id === "all") {
            dispatch(typeViews());
            setTimeout(() => {
                dispatch(getAllCities())
                dispatch(getCity(id));
            }, 1000)
        }
        else {
            dispatch(getCity(id));
            setTimeout(() => {
                dispatch(getCity(id));
            }, 1000)
            dispatch(viewsTrue())
        }

    }

    const allCities = () => {
        dispatch(reset())
        dispatch(getAllCities())
        dispatch(viewsTrue())
    }

    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle className='btn__dorp' id="dropdown-basic">
                    {props.title}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={()=>selectCity("all")} > Una sola gráfica </Dropdown.Item>
                    <Dropdown.Item onClick={allCities} > Todas las ciudades </Dropdown.Item>
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