import "./SortBy.css"

const SortBy = ({ SortByAlpha, SortByRelease, SortByVote, ResetPage }) => {
    const handleSortChange = (e) => {
        const value = e.target.value;



    if (value === "alphabetic") {
      SortByAlpha();
    } else if (value === "releaseDate") {
      SortByRelease();
    } else if (value === "voteAverage") {
      SortByVote();
    }
      else if (value === "Default") {
        ResetPage();
      }
  };

  return (
    <section className="SortBy">
      <label htmlFor="sort" className="SortLabel">Sort:</label>
      <select className="Sort" name="sort" onChange={handleSortChange}>
        <option value="Default">Default</option>
        <option value="alphabetic">A-Z</option>
        <option value="releaseDate">Release Date</option>
        <option value="voteAverage">Vote Average</option>
      </select>
    </section>
  );
};

export default SortBy;