import { useState } from "react";

export const Search = ({ searchFunction }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    searchFunction(searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchFunction(searchTerm);
    }
  };

  return (
    <>
      <div className="tw-flex tw-flex-row">
        <input
          id="input-search"
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
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
