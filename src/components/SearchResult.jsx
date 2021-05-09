const SearchResult = ({title, year, nominatedTitles, onNominate}) => {
    return (
        <div>
            <h1>{title}</h1>
            <h2>{year}</h2>
            {nominatedTitles.find((element) => {
                    return element.title === title;
                })
                ?<button disabled={true}>Nominate</button>
                :<button onClick={onNominate}>Nominate</button>
            }
        </div>
    )
}
export default SearchResult