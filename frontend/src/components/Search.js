import React from "react";

const Search = ({handleSearchNote}) => {
    return (
        <div className="search">
            <a className="search-icon" size="1.2em">&#128269;</a>
            <input onChange={(event)=>
                handleSearchNote(event.target.value)
        } 
            type="text" placeholder="Type to search ..."/>
        </div>
     
        );
}

export default Search;
