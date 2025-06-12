import "./SortBy.css"

const SortBy = ({ alphaSort, releaseSort, voteSort }) => {



    return (
    <section className="SortBy">
        <label for="sort" className="SortLabel">Sort:</label>
            <select className="Sort" name="sort">
            <option value="">Sort By:</option>
            <option value="alphabetic" onClick={alphaSort}>A-Z</option>
            <option value="releaseDate" onClick={releaseSort}>Release Date</option>
            <option value="voteAverage" onClick={voteSort}>Vote Average</option>
            </select>
    </section>
    )
    
}
    

export default SortBy;