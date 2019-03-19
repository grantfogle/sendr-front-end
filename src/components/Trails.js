import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Trail from './Trail';
import '../App.css'

const generateTrails = (trails) => {
    return trails.map(trail => {
        return (<Trail trail={trail} />)
    })
}


const Trails = ({ trails }) => {

    // function generateTrails() {
    //     return trails.map(trail => { <Trail trail={trail} /> });
    // }

    return (
        <div className="trails">
            <div className="trails-toolbar">
                <p>Status</p>
                <p>Name</p>
                <p>Location</p>
                <p>Learn More</p>
            </div>
            <div className="trails-status">
                {generateTrails(trails)}
            </div>
        </div>
    );
}

export default Trails;