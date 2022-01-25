import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Search = (props) => {
    const [choice, setChoice] = useState("");
    const [id, setId] = useState("");
    const history = useHistory();

    const onSubmitHandler = (event) => {
        event.preventDefault();
        history.push( `/${choice}/${id}`);
        console.log("submitted");
    }
    return (
        <div className='w-50 mx-auto pt-4'>
            <div className='row d-flex justify-content-around'>
                <h1>Luke APIwalker</h1>
                <form onSubmit={onSubmitHandler} className='form-inline'>
                    <label className='form-control-lg' htmlFor="choice">Search For:</label> 
                    <select className='form-control-lg' id="choice" onChange={(event) => setChoice(event.target.value)}>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                    </select>
                    <br /><br />
                    <input className="form-control-lg" type="number" min={1} placeholder="ID:" onChange ={(event) => setId(event.target.value)}/>
                    <br /><br />
                    <input type="submit" value="Search" className="btn btn-lg btn-warning" />
                </form>
            </div>
        </div>

    )
}

export default Search;

