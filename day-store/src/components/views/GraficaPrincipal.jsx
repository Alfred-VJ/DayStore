import React, { forwardRef, useRef } from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import { useReactToPrint } from 'react-to-print';
import { saveAsPng, saveAsJpeg } from 'save-html-as-image';


const GraficaPrincipal = forwardRef((props, ref) => {
    const ii__gr = document.getElementById("AllCities");
    const imp = (formato) => {
        formato === "png" ? saveAsPng(ii__gr) : saveAsJpeg(ii__gr);
    }

    return (
        <div  className='__Card' style={{ width: "80%", marginLeft: "10%" }}>
            <Card className='__CardUp' ref={ref}>
                <div className='title__btn'>
                    <h3 className='title__Card'>Todas las ciudades</h3>
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
                    <Chart options={props.options} series={props.series} labels={props.labels} type="donut" width="380" />
                    <Card.Body>
                        <Card.Title className='m-3'>{props.city?.ciudad}</Card.Title>
                        <Card.Text>
                            <ul>
                                <li>{`Meta: Se requieren ${props.values.total} servicios para alcanzar la meta propuesta.`}</li>
                                <li>{`Alcance: Se alcanzaron ${props.values.totalSer} de los ${props.values.total} servicios, faltando ${props.values.total - props.values.totalSer} para llegar a la meta.`}</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Card>
        </div>
    )
})


const PrintPdfP = (props) => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    let btn = <Dropdown.Item onClick={handlePrint}>Imprimir pdf</Dropdown.Item>
    return (
        <div id='AllCities' style={{height:"100vh"}}>

            <GraficaPrincipal
                ref={componentRef}
                options={props.options}
                labels={props.labels}
                series={props.series}
                city={props.city}
                values={props.values}
                btn={btn}
            />
        </div>
    );
};

export default PrintPdfP;