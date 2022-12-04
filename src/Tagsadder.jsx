import React, { useState } from 'react'
import Tags from './Tags';

const Tag = () => {


    const [text, setText] = useState('');
    const [tag, setTag] = useState([])
    const [blur, setBlur] = useState(false);
    const [sended, setSended] = useState(false)

    const hendleSetText = (e) => {
        setText(e.target.value)  // Позволяет нам вводить текст в инпут 
    }

    const hendleSetBlur = () => {
        setBlur(true)
        setSended(false)
    }

    const hendleSubmit = (e) => {
        e.preventDefault()      // При отправке формы мы должны остановить действие браузер по умолчанию 
        if (text.trim()) {     //Проверка на пустату строк если строка пустая то false
            console.log(text.trim());     // Вы водить текст в кансоль 
            setText('') //Сбрасывает текст инпута 
            setBlur(false)    //Выключает выбранность после отправки 
            setSended(true)    // Статус отправки true   
            setTag([...tag,
                text
            ])

        }

    }

    const deleteTagsHandler = (indexRemove) => {
        const filtered = tag.filter((elem, index) => {
            if (index === indexRemove) {
                return false;
            }
            return true;
        });
        setTag(filtered);
    };

    const hendleSetName = () => !text && blur ? 'inputer is-error' : 'inputer'


    const hendleSetHolder = () => !text && blur ? 'пустой инпут' : 'в ведите тег'

    return (

        <div className='tagbox'>
            <form onSubmit={hendleSubmit} className='textform'>
                <input
                    placeholder={hendleSetHolder()}
                    className={hendleSetName()}
                    type="text"
                    onBlur={hendleSetBlur}
                    value={text}
                    onChange={hendleSetText}
                />
                <button disabled={!text} className={!text ? 'btn disabled' : 'btn'}><p className='btntext'>click</p></button>
                {/* <button onClick={() => console.log(tag)} className='btn' >check</button> */}
            </form>
            <div className='tegmenu'>
                <div className="main_content_div">
                    {tag.map((el, index) => (
                        <div className='main_content_div_two'>
                            <div className='text_content_div'>
                                <p className='text_content_tag'>{el.toLowerCase()}</p>
                            </div>
                            <button
                                className='btn_blt'
                                onClick={() => {
                                    deleteTagsHandler(index);
                                }}
                            > ×</button>
                        </div>
                    ))}
                </div>
            </div>

            {/* <Tags text={tag.forEach((item) => item)}/> */}
        </div>
        
        // {initialState.map((el, index) => (
        //     <div className="tags">
        //       {el.name}{" "}
        //       <span
        //         role="button"
        //         onClick={() => {
        //           deleteTagsHandler(index);
        //         }}
        //       >
        //         x
        //       </span>{" "}
        //     </div>
        //   ))}

    );





}

export default Tag