import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
//get some icons up in here
import '../App.css'

const filterButtons = () => {
    return (
        <ul className="filter-list">
            <li>Front Range</li>
            <li>Salida/Canyon City</li>
            <li>Crested Butte/Gunnison</li>
            <li>Park County</li>
            <li>Grand Junction/Fruita</li>
            <li>Colorado Springs</li>
        </ul>
    )
}

const Filter = ({ filter, clicked, clickedFilter }) => {
    return (
        <div className="main">
            <button className="filter" onClick={() => clickedFilter()}> Where are you riding?</button>
            {clicked ? filterButtons() : ''}
            {/* <DropdownButton id="dropdown-basic-button" className="filter" title="Dropdown button">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton> */}
        </div>
    );
}

export default Filter;