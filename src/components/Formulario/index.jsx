import { useEffect, useState } from "react";

const Formulario = () => {
    let [materiaA, setmateriaA] = useState(0);
    let [materiaB, setmateriaB] = useState(0);
    let [materiaC, setmateriaC] = useState(0);
    let [nome, setNome] = useState('');

    useEffect(() => {
        console.log("o estado mudou")
    }, );

    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            return evento.target.value
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3

        if (media >= 7){
            return(
                <p>Olá {nome}, você foi aprovado.</p>
            )
        } else {
            return(
                <p>Olá {nome}, você não foi aprovado.</p>
            )
        }
    }

    return(
        <form>
            <input type="text" placeholder="Seu nome" onChange={alteraNome}/>
            <input type="name" placeholder="Nota /materia A" onChange={evento => setmateriaA(parseInt(evento.target.value))} />
            <input type="name" placeholder="Nota /materia A" onChange={evento => setmateriaB(parseInt(evento.target.value))}/>
            <input type="name" placeholder="Nota /materia A" onChange={evento => setmateriaC(parseInt(evento.target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario