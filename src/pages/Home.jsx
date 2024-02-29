import { useEffect, useState } from "react";
import { Search } from "../components/search/Search";
import { SearchResult } from "../components/search/SearchResult";
import { useNavigate } from "react-router-dom";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../configs/firebaseConfig";
import { capitalizeFirstLetter } from "../utils/functions";

export function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [resources, setResources] = useState([]);
  const navigate = useNavigate();

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
      // console.log(filteredResults, "filteredResults");
    };

    if (!searchQuery) {
      return undefined;
    } else {
      handleSearch();
      // console.log("searchQuery", searchQuery);
    }
  }, [searchQuery]);

  useEffect(() => {
    const resourceRef = collection(db, "Resources");
    const q = query(
      resourceRef,
      where("tags", "array-contains-any", ["health-professional"]),
    );
    onSnapshot(q, (snapshot) => {
      const resourceSnapshots = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setResources(resourceSnapshots);
      // console.log("resourceSnapshots", resourceSnapshots);
    });
  }, []);
  // console.log("resources", resources);

  const goToSingle = (resourceId, obj) => {
    navigate(`/resource/${resourceId}`, {
      state: {
        ...obj,
      },
    });
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  console.log("Home render");

  return (
    <div
      id="homepage"
      className="bg-grad-orange-washed tw-min-h-screen tw-text-slate-300"
    >
      <div className="page-container">
        <h2 className="page-title">
          Resources for the LGBTQIA+ community in Switzerland
        </h2>

        <Search searchFunction={handleSearch} />
        <SearchResult searchResults={searchResults} />

        <section className="last-added">
          <h2 className="last-added-title">Last added on Health</h2>
          <div className="resources-ctn">
            {resources.length === 0
              ? ""
              : resources.map((resource) => {
                  const { id, tags, title } = resource;
                  return (
                    <div
                      className="single-resource-ctn single-card bg-grad-orange-washed"
                      key={id}
                    >
                      <div className="resource-item">
                        <h2
                          onClick={(e) => goToSingle(id, resource)}
                          className="resource-clickable-title"
                        >
                          {title}
                        </h2>

                        {tags && (
                          <div className="tags-container">
                            {tags.map((tag, i) => {
                              const tagItem = tag.replace(/-/g, " ");
                              return (
                                <span
                                  key={tag.i}
                                  className="resource-tag-item bg-grad-purple"
                                >
                                  {capitalizeFirstLetter(tagItem)}
                                </span>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
          </div>
        </section>
      </div>
    </div>
  );
}
