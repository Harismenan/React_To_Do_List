import React from "react";
// import "./SearchItem.css";

const SearchItem = ({ searchItem, setSearchItem }) => {
  return (
    <div>
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search</label>
        <input
          id="search"
          type="text"
          role="searchBox"
          placeholder="Search..."
          aria-label="Search"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
      </form>

      {/* <form
        className="d-flex"
        role="search"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchItem}
        />
        <button
          className="btn btn-outline-success"
          type="submit"
          onClick={(e) => setSearchItem(e.target.value)}
        >
          Search
        </button>
      </form> */}
    </div>
  );
};

export default SearchItem;
