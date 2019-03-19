import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
// import Trail from './Trail';
import '../App.css'

// const generateTrails = () => {
//     return filterTrails.map(trail => { <Trail name={name} status={status} location={location} /> })
// }

const Trails = ({ }) => {
    return (
        <div className="trails">
            <h1>asdfasdf</h1>
            <div className="trails-toolbar">
                <p>Status</p>
                <p>Name</p>
                <p>Location</p>
                <p>Learn More</p>
            </div>
        </div>
    );
}

export default Trails;