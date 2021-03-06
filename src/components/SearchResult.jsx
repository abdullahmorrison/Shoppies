const SearchResult = ({title, year, nominatedTitles, onNominate}) => {
    return (
        <div className="searchResults">
            <h1>{title}</h1>
            <h2>{year}</h2>
            {nominatedTitles.find((element) => {
                    return element.title === title;//checking if a movie being searched is already nominated
                })
                ?<button disabled={true}>Nominate</button>
                :<button onClick={onNominate}>Nominate</button>
            }
        </div>
    )
}
export default SearchResult