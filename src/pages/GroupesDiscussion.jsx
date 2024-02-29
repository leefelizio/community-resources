import React from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../configs/firebaseConfig";
import { capitalizeFirstLetter } from "../utils/functions";
import { Link, useNavigate } from "react-router-dom";
import { iconActionSize, iconActionSizeS } from "../utils/constants";

export function GroupesDiscussion() {
  const [resources, setResources] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const resourceRef = collection(db, "Resources");
    // , orderBy("createdAt", "desc")
    const q = query(
      resourceRef,
      where("tags", "array-contains-any", ["groupe-de-parole"]),
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

  return (
    <div className="bg-grad-orange-washed tw-min-h-screen">
      <div className="page-container tag-page">
        <h2 className="page-title">Support groups</h2>
        {resources.length === 0
          ? ""
          : resources.map((resource) => {
              const {
                id,
                tags,
                city,
                description,
                email,
                phone,
                title,
                link,
                googleMaps,
              } = resource;
              return (
                <div
                  className="single-resource-ctn single-card bg-grad-slate"
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

                    <div className="resource-info-details-ctn">
                      <div className="list-info">
                        <div className="resources-quick-info">
                          <img
                            alt="City"
                            title="City"
                            src="../assets/icons/icon-city.png"
                            width={iconActionSizeS}
                            height={iconActionSizeS}
                          />
                          <span className="tw-ml-2">{city}</span>
                        </div>
                      </div>
                      <div className="description-and-actions">
                        <p>{description}</p>

                        {/* QUESTION: How to reutilise component below?
                        <ResourcesQuickActions result={result} /> */}
                        <div className="resources-quick-actions">
                          <Link
                            to={`tel:${phone}`}
                            className="resource-quick-actions-item"
                          >
                            <img
                              className="tw-mb-2"
                              title="country"
                              src="../assets/icons/icon-action-phone.png"
                              width={iconActionSize}
                              height={iconActionSize}
                            />
                          </Link>
                          <Link
                            to={`mailto:${email}`}
                            className="resource-quick-actions-item"
                          >
                            <img
                              className="tw-mb-2"
                              title="Write one email"
                              src="../assets/icons/icon-action-email.png"
                              width={iconActionSize}
                              height={iconActionSize}
                            />
                          </Link>
                          <Link
                            to={googleMaps}
                            target={"_blank"}
                            className="resource-quick-actions-item"
                          >
                            <img
                              className="tw-mb-2"
                              title="See in Google Maps"
                              src="../assets/icons/icon-action-address.png"
                              width={iconActionSize}
                              height={iconActionSize}
                            />
                          </Link>
                          <Link
                            to={link}
                            target={"_blank"}
                            className="resource-quick-actions-item"
                          >
                            <img
                              className="tw-mb-2"
                              title="Go to website"
                              src="../assets/icons/icon-action-link.png"
                              width={iconActionSize}
                              height={iconActionSize}
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}
