import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Trail = ({ trail }) => {
    const { location, name, region, status } = trail;
    return (
        <div className='trail'>
            {/*id*/}
            {/*icon*/}
            {/* <FontAwesomeIcon icon='faCircle' className='icon' style={status === "closed" ? { backgroundColor: 'red' } : { backgroundColor: "green" }} /> */}
            <FontAwesomeIcon icon='faCircle' className='icon' />
            < div className='trail-name'>{name}</div>
            {/*name*/}
            <div className='trail-region'>{region}</div>
            {/*region*/}
            <div className='trail-location'>{location}</div>
            {/*location*/}
            <div className='trail-status'>{status}</div>
            {/*status*/}
            {/*reason for closure*/}
            {/*weather - five day forecast*/}
            {/*next trail date*/}
        </div >
    );
}

export default Trail;