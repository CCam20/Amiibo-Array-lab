import React from 'react'

const BasketItem = ({basketItem}) => {
  return (
    <>
    <li>AmiiboSeries: {basketItem.amiiboSeries} </li>
    <li>Character: {basketItem.character}</li>
    <li>Game Series:{basketItem.gameSeries}</li>
    <li>Name:{basketItem.name}</li>
    <hr></hr>
    <br></br>
    </>
  )
}

export default BasketItem