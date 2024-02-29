import { useState } from "react";

export const Search = ({ searchFunction }) => {
  // const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    const searchTerm = document.querySelector("#input-search").value;
    searchFunction(searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // console.log("Search render");

  return (
    <>
      <div className="tw-flex tw-flex-row">
        <input
          id="input-search"
          type="search"
          onKeyPress={handleKeyPress}
          placeholder="Search on resources by city, title or description"
          aria-label="Search"
        />
        <button className="btn-primary-search" onClick={handleSearch}>
          Search
        </button>
      </div>
    </>
  );
};
