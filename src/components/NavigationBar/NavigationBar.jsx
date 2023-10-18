import React from "react";
import "./NavigationBar.css";
import logo from "./logo.svg";

export default function NavigationBar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Disney+" />
      </div>
      <div className="NavMenu">
        <a href="/">
          <img className="Image" src="/images/home-icon.svg" alt="HOME" />
          <span>HOME</span>
        </a>
        <a>
          <img className="Image" src="/images/search-icon.svg" alt="SEARCH" />
          <span>SEARCH</span>
        </a>
        <a>
          <img className="Image" src="/images/watchlist-icon.svg" alt="WATCHLIST" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img className="Image" src="/images/original-icon.svg" alt="ORIGINALS" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img className="Image" src="/images/movie-icon.svg" alt="MOVIES" />
          <span>MOVIES</span>
        </a>
        <a>
          <img className="Image" src="/images/series-icon.svg" alt="SERIES" />
          <span>SERIES</span>
        </a>
      </div>
    </div>
  );
}
