
import React from 'react'

function Botao({ texto, forma }) {
    return (
        <button className={forma}>{texto}</button>
    )
}

export default Botao