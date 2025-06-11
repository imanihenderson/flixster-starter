import "./SortBy.css"

const SortBy = () => {
    return (
    <section className="SortBy">
        <label for="sort">Sort:</label>
            <select className="Sort" name="sort">
            <option value="">Sort By:</option>
            <option value="alphabetic">A-Z</option>
            <option value="releaseDate">Release Date</option>
            <option value="voteAverage">Vote Average</option>
            </select>
    </section>
    )
    
}
    

export default SortBy;