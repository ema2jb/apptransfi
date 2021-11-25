import React from 'react';
import '../../styles/input.css';

const InputField = ({ type, placeholder, iconClass, iconAction, icon, name, value, change, optional }) => {
    return (
        <div>
            <div className="inputHolder">
                <input type={type} placeholder={placeholder} name={name} value={value} onChange={change} required={!optional}/> 
                {icon && <i className={` isClickable ${iconClass}`} onClick={iconAction}></i>}
            </div>
        </div>
    )
}

export default InputField
