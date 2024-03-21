import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import './Country.css'
import Singlecountry from "./Singlecountry";

const Countries = () => {
    const [country, setCountry] = useState([]);
    const [visitCountry, setVisitCountry] = useState([])
    console.log(visitCountry);
    const handleVisitCountry = (country) =>{
        const newSetCountry = [...visitCountry, country];
        setVisitCountry(newSetCountry)
    }


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])
    return (
        <div>
            <h1>All Country In The World</h1>
            <h2>visit country: {visitCountry.length}</h2>
            <div className="box-body">
                {
                    visitCountry.map(singleCountry => <Singlecountry clickCountry={singleCountry}></Singlecountry>)
                }
            </div>
            <div className="box-body">
                {
                    country.map(country => <Country 
                        country={country}
                        handleVisitCountry={handleVisitCountry}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;