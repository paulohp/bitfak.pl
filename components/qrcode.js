import React from 'react'

export default ({address, amount, className}) => (
    <img className={className} 
        src={`https://chart.googleapis.com/chart?chs=360x360&cht=qr&chl=bitcoin:${address}?amount=${amount}`} />
);