import React, { useState } from 'react'
import './square.css'




const Square = ({value,onSquareClick}) => {

return (
    <>
        <button className="singleBox"onClick={onSquareClick} >{value}</button>
    </>
)
}

export default Square
