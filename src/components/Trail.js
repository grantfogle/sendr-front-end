import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Trail = ({ trail }) => {
    const { location, name, region, status } = trail;
    return (
        <div className='trail'>
            {/*id*/}
            {/*icon*/}
            <div className='trail-status'>
                <FontAwesomeIcon icon='circle' className='icon' style={status === "Closed" ? { color: '#c0392b' } : { color: "#27ae60" }} />
                <div className='trail-status'>{status}</div>
            </div>
            < div className='trail-name'>{name}</div>
            {/*name*/}
            <div className='trail-region'>{region}</div>
            {/*region*/}
            <div className='trail-location'>{location}</div>
            {/*location*/}
            {/*status*/}
            {/*reason for closure*/}
            {/*weather - five day forecast*/}
            {/*next trail date*/}
        </div >
    );
}

export default Trail;