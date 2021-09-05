import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import TextInput from '../common/textInput';

const searchevent = (props) => {
    return (
        <div className="text-center -mt-11">
            <div className="mx-5 p-5 text-base mainfont bg-maincolor opacity-90">
                <p className="text-base text-white">Search for an event</p>
                <div className="sm:flex sm:justify-around">
                    <TextInput type="text" label="looking for" placeholder="Any thing" />
                    <TextInput type="text" label="in" placeholder="Any location" />
                    <TextInput type="date" label="on" placeholder="Any date" />
                    <button className="bg-white w-auto flex justify-end items-center text-blue-500 m-5 py-3 px-5  hover:text-blue-400">
                        <FontAwesomeIcon icon={faSearch}/>
                    </button>
                </div>

            </div>
        </div>
    );
}

export default searchevent;