import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
//get some icons up in here
import '../App.css'

const Filter = () => {
    return (
        <div className="main">
            <button className="filter">Where are you riding</button>
            {/* <DropdownButton id="dropdown-basic-button" className="filter" title="Dropdown button">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton> */}
        </div>
    );
}

export default Filter;