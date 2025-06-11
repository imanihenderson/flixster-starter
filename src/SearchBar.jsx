import './SearchBar.css'

const SearchBar = () => {
    return (
        <form class="SearchBar">
            <input type="text" placeholder="Search Movies..." className="InputBar">
            </input>
            <button className="SearchButton">Search</button>
            <button className="Clearbutton">Clear</button>
        </form>
    )
}

export default SearchBar;