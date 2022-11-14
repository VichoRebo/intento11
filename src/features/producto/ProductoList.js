import React, { useEffect, useState } from 'react'
import Producto from './Producto'
import { Row, Col } from 'antd'
import './ProductoList.css'
import axios from 'axios'

const data = [
    { key: "1", imagen: "https://joeschmoe.io/api/v1/2", precio: "Detalle 1", cantidad: "Titulo 1" },
    { key: "2", imagen: "https://joeschmoe.io/api/v1/1", precio: "Detalle 2", cantidad: "Titulo 2" },
    { key: "3", imagen: "https://joeschmoe.io/api/v1/4", precio: "Detalle 3", cantidad: "Titulo 3" },
    { key: "4", imagen: "https://joeschmoe.io/api/v1/5", precio: "Detalle 4", cantidad: "Titulo 4" },
    { key: "5", imagen: "https://joeschmoe.io/api/v1/3", precio: "Detalle 5", cantidad: "Titulo 5" },
    { key: "6", imagen: "https://joeschmoe.io/api/v1/6", precio: "Detalle 6", cantidad: "Titulo 6" },
    { key: "7", imagen: "https://joeschmoe.io/api/v1/7", precio: "Detalle 7", cantidad: "Titulo 7" }

]
const ProductoList = () => {

    const [basedatos, setBasedatos] = useState(data);
    
    const handleEdit = () => {
        basedatos.map( (elemento) => {
            console.log(elemento)
            return(
                elemento
                );
            }
            
            )
            
        }
        useEffect(()=>{
            const resultado = axios.get("https://g9cd7530b8a8613-db20220601151235.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/producto/").then((response) => {
                setBasedatos(response.data.items)
                console.log("BASEDATOS", basedatos);
            })
        },[])
        return (
            <Row gutter={16}>
            {
                // indicates very long content
                // Array.from(
                //     {
                //         length: 100,
                //     },
                //     (_, index) => (
                //         <Col className="gutter-box" >
                //             <Producto />
                //         </Col>
                //     ),
                // )
                basedatos.map(elemento => {
                    return(
                    <Col className="gutter-box" >
                        <Producto key={elemento.key} valor={elemento} onClick={handleEdit} />
                    </Col>
                    )
                    
                })
            }
        </Row>
    )
}
export default ProductoList;
