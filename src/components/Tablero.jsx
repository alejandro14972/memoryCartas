import { useState, useEffect } from "react";
import { cartas } from "../data/cartas";
import Carta from "./Carta";

export default function Tablero() {
    const [carts, setCarts] = useState(cartas);
    const [cartasVolteadas, setCartasVolteadas] = useState([]);

    function barajar() {
        const cartasCopia = [...carts];
        return cartasCopia.sort(() => Math.random() - 0.5);
    }

    useEffect(() => {
        setCarts(barajar());
    }, []);

    function vuelta(item) {
        setCartasVolteadas([...cartasVolteadas, item]);
        console.log(cartasVolteadas);
    }
    useEffect(() => {
        checkear()
    }, [cartasVolteadas]);



    function winner() {
        setTimeout(() => {
            if (carts.length === 0) {
                alert("Ganaste");
            }
        }, 2000);

    }

    useEffect(() => {
        winner()
    }, [cartasVolteadas]);

    function checkear() {
        if (cartasVolteadas.length === 2) {
            const carta1 = cartasVolteadas[0];
            const carta2 = cartasVolteadas[1];
            if (carta1.nombre === carta2.nombre) {
                setTimeout(() => {
                    const nuevasCartas = carts.filter(c => c.nombre !== carta1.nombre)
                    setCarts(nuevasCartas)
                    setCartasVolteadas([])
                }, 2500);
            } else {
                setTimeout(() => {
                    console.log("no iguales");
                    setCartasVolteadas([])
                }, 1000);
            }
        } else {
            console.log("no hay 2 cartas volteadas");
        }
    }

    return (
        <>
            <div className="row">
                {carts.map((carta) => (
                    <Carta
                        key={carta.id}
                        item={carta}
                        vuelta={vuelta}
                    />
                ))}
            </div>
        </>
    )
}
