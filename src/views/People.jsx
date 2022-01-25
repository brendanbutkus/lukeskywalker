import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import axios from 'axios';


const People = (props) => {
    const [people, setPeople] = useState({});
    const {id} = useParams();

    useEffect  (() => {
        axios.get(`https://swapi.dev/api/people/${id}/?format=json`)
        .then(res => {
            console.log(res);
            setPeople(res.data)
        })
        .catch(err => console.log(err));
        setPeople({error: "Theese are not the droids you are looking for"});

    }, [id])

    return (
        people.error ?
        <h1>{people.error}</h1>:
        <div className='w-50 mx-auto'>
            <h1>Name: {people.name}</h1>
            <p>Height: {people.height}cm</p>
            <p>Mass: {people.mass}kg</p>
            <p>Hair Color: {people.hair_color}</p>
            <p>Skin Color: {people.skin_color}</p>
        </div>
    )
}

    


export default People;