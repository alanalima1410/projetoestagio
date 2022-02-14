import React from 'react';
import './input.css';

function Input({type, name, placeholder, value, number, image, date, handOnChange}) {
    return (
        <div className='.form_control'>
            <label htmlFor={name}></label>
            <input type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    //number={number}
                    //image={image}
                   // date={date}
                    onChange={handOnChange}
                    id={name}
            />
        </div>
    )
}

export default Input