import React, { useState, useEffect } from 'react'

const SearchResults = ({searchValue, nominate}) => {
    const [title, setTitle] = useState("")
    const [year, setYear] = useState()

    useEffect(()=>{
        fetchOMDb()
    }, [searchValue])

    const fetchOMDb = async () =>{
        try{
            const response = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=81db3928&type=movie&t='+encodeURIComponent(searchValue).replace('%20','+'))
            const data = await response.json()
            console.log(data)
            setTitle(data.Title)
            setYear(data.Year)
        }catch(err){
            console.log(err)
        }
    }

 
    return (
        <div>
            <h1>{title}</h1>
            <h2>{year}</h2>
        </div>
    )
}
export default SearchResults