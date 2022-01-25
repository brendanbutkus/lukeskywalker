import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const Planets = (props) => {
    const { id } = useParams();
    const [planet, setPlanet] = useState({});

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}/?format=json` )
        .then(res => {
            console.log(res);
            setPlanet(res.data);
        })
        .catch(err => console.log(err))
        setPlanet({error: "These are not the droids you are looking for"})
    }, [id])
    
    return(
        planet.error ?
        <h1>{planet.error}</h1> :
        <div className="w-50 mx-auto p-5">
            <h1>Planet: {planet.name}</h1>
            <p>Terrain: {planet.terrain}</p>
            <p>Climate: {planet.climate}</p>    
            <p>Surface Water: {planet.surface_water ? "true" : "false"}</p>   
            <p>Population: {planet.population}</p>   
        </div>
    )
}

export default Planets;
        












