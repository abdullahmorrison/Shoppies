const Nominations = ({data, onRemoveNominee}) => {
    return(
        <div>
            <h1>{data.title}</h1>
            <h2>{data.year}</h2>
            <button onClick={()=>onRemoveNominee(data.title)}>Remove</button>
        </div>
    )
}
export default Nominations