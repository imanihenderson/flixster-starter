import './SearchBar.css'

const SearchBar = () => {
    return (
        <form class="SearchBar">
            <input type="text" placeholder="Search Movies...">
            </input>
            <button className="SearchButton">Search</button>
        </form>
    )
}

export default SearchBar;