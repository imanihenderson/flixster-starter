import "./NavBar.css";
import SearchBar from "./SearchBar";
import SortBy from "./SortBy";
import { useEffect, useState } from "react";
//import MovieList from './MovieList'

const NavBar = ({ searchTerm, setSearchTerm, onClear, SortByAlpha, SortByRelease, SortByVote }) => {
  return (
    <nav className="NavBar">
      <h1 className="SiteTitle">Flixster</h1>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onClear={onClear}
      />
      <SortBy
        alphaSort={SortByAlpha}
        releaseSort={SortByRelease}
        voteSort={SortByVote}

      />
    </nav>
  );
};

export default NavBar;
