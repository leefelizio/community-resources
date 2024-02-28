import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../configs/firebaseConfig";
import SearchResultItem from "./SearchResultItem";

// export const SearchResult = ({ searchResults, searchQuery }) => {
export const SearchResult = ({ searchQuery }) => {
  const [searchResults, setSearchResults] = useState([]);

  // QUESTION: Should it be on useEffect?
  const fetchSearchResults = async () => {
    const resourceRef = collection(db, "Resources");
    try {
      const snapshot = await getDocs(resourceRef);
      const documents = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return documents;
    } catch (error) {
      console.error("Error fetching search results: ", error);
      return [];
    }
  };

  useEffect(() => {
    const handleSearch = async () => {
      const documents = await fetchSearchResults();

      const filteredResults = documents.filter((document) => {
        const lowerCaseQuery = searchQuery.toLowerCase();
        return (
          !searchQuery ||
          document.title.toLowerCase().includes(lowerCaseQuery) ||
          document.city.toLowerCase().includes(lowerCaseQuery) ||
          document.description.toLowerCase().includes(lowerCaseQuery)
        );
      });
      setSearchResults(filteredResults);
      console.log(filteredResults, "filteredResults");
    };

    if (!searchQuery) {
      return undefined;
    } else {
      handleSearch();
      console.log("searchQuery", searchQuery);
    }
  }, [searchQuery]);

  return (
    <>
      <p className="tw-py-3 tw-italic tw-text-xs">
        {console.log("searchResults", searchResults)}
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

// import { useState } from "react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../configs/firebaseConfig";
// import SearchResultItem from "./SearchResultItem";

// export const SearchResult = ({ searchQuery }) => {
//   const [searchResults, setSearchResults] = useState([]);

//   const fetchSearchResults = async () => {
//     const resourceRef = collection(db, "Resources");
//     try {
//       const snapshot = await getDocs(resourceRef);
//       const documents = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       return documents;
//     } catch (error) {
//       console.error("Error fetching search results: ", error);
//       return [];
//     }
//   };

//   const handleSearch = async () => {
//     const documents = await fetchSearchResults();
//     const filteredResults = documents.filter((document) => {
//       const lowerCaseQuery = searchQuery.toLowerCase();
//       return (
//         !searchQuery ||
//         document.title.toLowerCase().includes(lowerCaseQuery) ||
//         document.city.toLowerCase().includes(lowerCaseQuery) ||
//         document.description.toLowerCase().includes(lowerCaseQuery) ||
//         document.email.toLowerCase().includes(lowerCaseQuery)
//       );
//     });
//     setSearchResults(filteredResults);
//   };

//   if (searchQuery) {
//     handleSearch();
//   }

//   return (
//     <>
//       {searchResults.map((result) => (
//         <SearchResultItem key={result.id} result={result} />
//       ))}
//     </>
//   );
// };
