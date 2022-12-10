import React, { useState } from 'react'

const Product = () => {
    const [info, setInfo] = useState(false)
    const [status, setStatus] = useState('Добавить в корзину')
    const [vize, setVize] = useState(false)
    const handleInfo = (e) => {
        e.preventDefault()
        setInfo(true)
    }

    const handleClose = () => {
        setInfo(false)
    }

    const handleTace = () => {
        setStatus('В карзине')
        setVize(true)
    }
    return (

        <div className='product'>
            <div className='imageProduct'></div>
            <div className='aboutProduct'>
                <div className='priceAndDescription'>
                    <div className='infoProduct'>
                        <p className='nameProduct'>Nike Sneaker</p>
                        <p className='priceProduct'>$120</p>
                    </div>
                    <div className='btnblock'>
                        <button className='btninfo' onClick={handleInfo}>Детали</button>
                        {info ?
                            <div className='infoBlock'><button className='btnclose' onClick={handleClose}>x</button>
                            <p className='longinfo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div> : null}
                    </div>
                </div>
                <div className='GetShortDescription'>
                    <p className='shortinfo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                    <button className='btnBasket'  onClick={handleTace}>{status}</button>
                    {vize ? <button className='btnclose' onClick={() => {setStatus('Добавить в корзину');setVize(false)}}>удалить из кjрзины</button> : null}
                </div>
            </div>
        </div>


    )
}

export default Product