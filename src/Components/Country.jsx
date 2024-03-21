import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitCountry} ) => {
    const {name, flags, timezones, area} = country;
    const [visited, setVisited] = useState(false);
    const handleVisit = () =>{
        setVisited(!visited);
    }
    return (
        <div className='box'>
            <h3>{name.common}</h3>
            <img src={flags.png} alt="" />
            {/* <h4>Timezone:{timezones}</h4>
            <h4>Area:{area}</h4> */}
        <button onClick={() => handleVisitCountry(country)}>visit country</button>
        <button className={`${visited ? 'btn2' : 'btn'}`} onClick={handleVisit}> {visited ? 'Aldeady visited' : 'visit'} </button>
        </div>
    );
};

export default Country;