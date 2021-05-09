const Nominations = ({data}) => {
    return(
        <div>
            <div>
                <h1>{data.title}</h1>
                <h2>{data.year}</h2>
            </div>
        </div>
    )
}
export default Nominations