import React, { useEffect, useState } from 'react'
import AmiiboList from '../Components/AmiiboList'
import BasketList from '../Components/UI/BasketList'
import BasketItem from '../Components/UI/BasketItem'


const AmiiboContainer = () => {

const [amiibos, setAmiibos] = useState([])
const [basket, setBasket] = useState([])


useEffect(() => {
  getAmiibos();
    
},[])

const getAmiibos = function(){
    fetch("https://amiiboapi.com/api/amiibo/")
    .then(res => res.json())
    // const limitData = data.slice(0, 20)
    .then(data => setAmiibos(data.amiibo) )
}

const onClickAddToBasket = (addAmiibo) => {
    const addToBasket = [...basket, addAmiibo];
    setBasket(addToBasket);

    <BasketList basket={basket} />
    // const basketItems = basket.map((basket, index) => {
    //     return <BasketItem basket={basket} key={index} />
    // })
   
   
   
    console.log(basket);
}

return (
    <>

    <AmiiboList amiibos={amiibos} onClickAddToBasket={onClickAddToBasket}/>

    </>
  )
}

export default AmiiboContainer




// setBasket = [...basket, newitem]