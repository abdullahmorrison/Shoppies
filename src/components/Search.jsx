import React, { useState, useEffect } from 'react'
import SearchResult from './SearchResult'
import Nominee from './Nominee'
import { v4 as uuidv4 } from 'uuid';


const Search = () => {
    const [title, setTitle] = useState("")
    const [year, setYear] = useState("")
    const [nominees, setNominees] = useState([])

    //component did mount, retrieving nominees from local storage
    useEffect(()=>{
        if(localStorage.getItem("nominees")){
            setNominees(JSON.parse(localStorage.getItem("nominees")))
        }
    }, [])
    //fetching from OMDb every time a user presses a key in the search
    const search = async (event) =>{
        try{
            const response = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=81db3928&type=movie&t='+encodeURIComponent(event.target.value).replace('%20','+'))
            const data = await response.json()
            setTitle(data.Title)
            setYear(data.Year)
            console.log(data)
        }catch(err){
            console.log(err)
        }
    }
    //adds nominees and saves it to local storage
    const handleNominate = ()=>{
        if(title && year){
            setNominees([...nominees, {title, year}])
            localStorage.setItem("nominees", JSON.stringify([...nominees, {title, year}]))
        }else{
            console.error("No Movie Searched")
        }
    }
    //removes nominees from state and local storage
    const handleRemoveNominee=(title)=>{
        const changedNominees = nominees.filter(n => n.title !== title)
        setNominees(changedNominees)
        localStorage.setItem("nominees", JSON.stringify(changedNominees))
    }
    return (
        <>
            {
                nominees.length >= 5
                ? <h1> Banner </h1>
                :<></>
            }
            <input 
                type="text" 
                className="scale__header__input" 
                placeholder="Search" 
                onKeyUp={search} 
            />
            <SearchResult title={title} year={year} nominatedTitles={nominees} onNominate={handleNominate}/>
            {nominees.map(nominee => (
                <Nominee key={uuidv4()} data={nominee} onRemoveNominee={handleRemoveNominee}/>
            ))}
        </>
    )
}
export default Search