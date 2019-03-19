import React from 'react';

const Trail = ({ trail }) => {
    const { location, name, region, status } = trail;
    return (
        <div className="trail">
            {/*id*/}
            {/*icon*/}
            <div className="trail-name">{name}</div>
            {/*name*/}
            <div className="trail-region">{region}</div>
            {/*region*/}
            <div className="trail-location">{location}</div>
            {/*location*/}
            <div className="trail-status">{status}</div>
            {/*status*/}
            {/*reason for closure*/}
            {/*weather - five day forecast*/}
            {/*next trail date*/}
        </div>
    );
}

export default Trail;