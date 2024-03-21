import React from 'react';
import './Country.css'

const Singlecountry = ({clickCountry}) => {
    return (
        <div className='box'>
            <h4>Country Name:{clickCountry.name.common} </h4>
            <h4>subregion : {clickCountry.subregion}</h4>
            <h4>Languages : {clickCountry.capital}</h4>
            <h5>indipendent tui: {clickCountry.independent ? 'ho mama' : 'no bro'}</h5>
        </div>
    );
};

export default Singlecountry;