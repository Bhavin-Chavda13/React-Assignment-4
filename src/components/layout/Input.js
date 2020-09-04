import React from 'react'

const Input = (props) => {
    const {placeholder,value,onChange,type = "text",name} = props;
    return (
        <input
           type={type}
           placeholder={placeholder}
           name={name}
           value={value}
           onChange={onChange}
           className="form-control"
         />
    )
}

export default Input
