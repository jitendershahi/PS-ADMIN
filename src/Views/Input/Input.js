import React from 'react'

import { PropTypes } from 'prop-types'

export const Input = (props) => {
    let wrapperClass = 'form-group';
    if(props.error && props.error.length > 0){
        // wrapperClass += " " + 'has-error';
        wrapperClass = `${wrapperClass} has-error`
    }

    return (
        <div className={wrapperClass}>
            <label htmlFor={props.name}>{props.label}</label> 
            <div className="field">
                <input type="text"
                name={props.name}
                className="form-control" 
                placeholder={props.placeholder} 
                value={props.value}
                onChange={props.click} />
                <div className="input text-danger">{props.error}</div>
             </div>
        </div>
    )

}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
    error:PropTypes.any,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value:PropTypes.string

}



export default Input;