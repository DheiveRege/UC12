import React from 'react'

function Card({foto}) {
    
    return (
        <div className='card'>
            <img className='img-lin' src={foto} alt=""/>
            <h1>TEXTO</h1>
            <p>texto texto aqui tem um texto que pode ser lido com olhos texto lido parabens vo ce leu isso texto uau</p>
            <div className='card2'>
                <button className='btn-ex'>CLIQUE</button>

            </div>
        </div>
    )
}

export default Card