const Nominations = ({data, onRemoveNominee}) => {
    return(
        <div className="nominees">
            <div className="nominees__description">
                <h2>{data.title}</h2>
                <h3>{data.year}</h3>
            </div>
            <button onClick={()=>onRemoveNominee(data.title)}>Remove</button>
        </div>
    )
}
export default Nominations