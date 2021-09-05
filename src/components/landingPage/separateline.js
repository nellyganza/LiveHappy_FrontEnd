import React from 'react';

const  separateline=(props) =>{
    return (
        <div className="flex flex-row justify-center p-3 m-3">
            <div className="flex-1 h-px bg-black my-3 mr-3" />
            <div>
                <p className="text-center flex-1">{props.title}</p>
            </div>
            <div className="flex-1 h-px bg-black my-3 ml-3" />
        </div>
    );
}

export default separateline;