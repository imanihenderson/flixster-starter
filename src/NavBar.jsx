import "./NavBar.css";
import SearchBar from "./SearchBar";
import SortBy from "./SortBy";

const NavBar = ({ searchTerm, setSearchTerm, onClear, SortByAlpha, SortByRelease, SortByVote, ResetPage }) => {
  return (
    <nav className="NavBar">
        <section className="SortHolder">

            <SortBy
        className="SortBy"
        SortByAlpha={SortByAlpha}
        SortByRelease={SortByRelease}
        SortByVote={SortByVote}
        ResetPage={ResetPage}

      />
        </section>

      <h1 className="SiteTitle">Flixster</h1>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onClear={onClear}
      />
    </nav>
  );
};

export default NavBar;
