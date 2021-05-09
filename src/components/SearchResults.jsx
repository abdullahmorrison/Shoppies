const SearchResults = ({title, year, onNominate}) => {
    return (
        <div>
            <h1>{title}</h1>
            <h2>{year}</h2>
            <button onClick={onNominate}>Nominate</button>
        </div>
    )
}
export default SearchResults