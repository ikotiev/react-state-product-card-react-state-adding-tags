import React, { useState } from 'react'

const Product = () => {
    const [info, setInfo] = useState(false)
    const [status, setStatus] = useState('Добавить в карзину')
    const [vize, setVize] = useState(false)
    const hendelInfo = (e) => {
        e.preventDefault()
        setInfo(true)
    }

    const hendeClose = () => {
        setInfo(false)
    }

    const hendleTace = () => {
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
                        <button className='btninfo' onClick={hendelInfo}>Детали</button>
                        {info ?
                            <div className='infoBlock'><button className='btnclouse' onClick={hendeClose}>x</button>
                            <p className='longinfo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div> : null}
                    </div>
                </div>
                <div className='GetShortDescription'>
                    <p className='shortinfo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                    <button className='btnBascet'  onClick={hendleTace}>{status}</button>
                    {vize ? <button className='btnclouse' onClick={() => {setStatus('Добавить в карзину');setVize(false)}}>удалить из карзины</button> : null}
                </div>
            </div>
        </div>


    )
}

export default Product