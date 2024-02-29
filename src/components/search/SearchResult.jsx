import SearchResultItem from "./SearchResultItem";

export const SearchResult = ({ searchResults }) => {
  return (
    <>
      <p className="tw-py-3 tw-italic tw-text-xs">
        {/* {console.log("searchResults", searchResults)} */}
        {searchResults.length > 0
          ? `${searchResults.length} results found`
          : ""}
      </p>
      {searchResults.map((result) => (
        <SearchResultItem key={result.id} result={result} />
      ))}
    </>
  );
};
