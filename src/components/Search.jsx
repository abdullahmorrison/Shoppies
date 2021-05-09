import React, { useState } from 'react'
import SearchResults from './SearchResults'
import Nominations from './Nominations'


const Search = () => {
    const [searchValue, setSearchValue] = useState("")

    const displaySearch = (event) =>{
        setSearchValue(event.target.value)
        console.log(searchValue)
    }

    return (
        <>
            <input 
                type="text" 
                className="scale__header__input" 
                placeholder="Search" 
                onKeyUp={displaySearch} 
            />
            <SearchResults searchValue={searchValue}/>
            <Nominations/>
        </>
    )
}
export default Search