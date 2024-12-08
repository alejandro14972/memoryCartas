import { useState, useEffect } from 'react'

export default function Carta({ item, vuelta }) {

    const { img, nombre, id } = item;
    const [mostrar, setMostrar] = useState(false);


    function girarCarta(item) {
        vuelta(item)
        setMostrar(true)
        setTimeout(() => {
            setMostrar(false)
        }, 2000);
    }


    return (
        <div className="col-2">
            <div className="card h-100">
                {mostrar ? (
                    <img
                        src={`/images/imagenes/${img}`}
                        className="card-img-top"
                        alt={nombre}
                        id={id}
                        onClick={() => girarCarta(item)}
                    />
                ) : (
                    <img
                        src={`/images/imagenes/trasera.jpg`}
                        className="card-img-top"
                        alt={nombre}
                        id={id}
                        onClick={() => girarCarta(item)}
                    />
                )}
            </div>
        </div>
    )
}
