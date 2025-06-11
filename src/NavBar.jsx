import './NavBar.css'
import SearchBar from './SearchBar'
import SortBy from './SortBy'

const NavBar = () => {
    return (
        <nav className="NavBar">
            <h1 className="SiteTitle">Flixster</h1>
            <SearchBar></SearchBar>
            <SortBy></SortBy>


        </nav>
    )
}

export default NavBar;