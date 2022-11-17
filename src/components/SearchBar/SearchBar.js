import React from "react";
import './SearchBar.css';
const SearchBar = ({onInputChange}) => {
    return(
        <input onChange={onInputChange} className="center" type={'search'} />
    );
}

export default SearchBar;