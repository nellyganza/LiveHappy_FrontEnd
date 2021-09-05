import React from 'react';

const textInput = (props)=> {
    return (
        <div className="space-y-4 text-left text-xs text-white p-3">
            <label className="block">{props.label}</label>
            <input className="block w-full bg-transparent focus:outline-none border-b-2 border-white" placeholder={props.placeholder} type={props.type}/>
            <label className="block"> {props.error}</label>
        </div>
    );
}

export default textInput;