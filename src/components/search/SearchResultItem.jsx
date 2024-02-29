import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { capitalizeFirstLetter } from "../../utils/functions";
import ResourcesQuickActions from "../resources/ResourcesQuickActions";

const SearchResultItem = ({ result }) => {
  const navigate = useNavigate();
  const iconActionSize = 32;
  const {
    title,
    tags,
    address,
    city,
    description,
    email,
    imgUrl,
    link,
    openFromTime,
    openToTime,
    phone,
    googleMaps,
  } = result;

  const handleClick = () => {
    navigate(`/resource/${result.id}`, {
      state: {
        title,
        tags,
        address,
        city: city,
        description,
        email,
        imgUrl,
        link: link,
        openFromTime,
        openToTime,
        phone: phone,
        googleMaps,
      },
    });
  };

  return (
    <div className="resource-searched-item">
      <h2
        className="resource-clickable-title"
        title={`Open ${title}`}
        onClick={handleClick}
      >
        {title}
      </h2>

      {/* {console.log("tags on resource ", tags)} */}
      {tags && (
        <div className="tags-container">
          {tags.map((tag, i) => {
            const tagItem = tag.replace(/-/g, " ");
            return (
              <span key={tag.i} className="resource-tag-item bg-grad-purple">
                {capitalizeFirstLetter(tagItem)}
              </span>
            );
          })}
        </div>
      )}
      <div className="tw-flex tw-flex-row">
        <div className="tw-w-3/12">
          <div className="tw-flex tw-flex-col">
            <div className="resources-quick-info">
              <img
                title="country"
                src="assets/icons/icon-city.png"
                width={iconActionSize}
                height={iconActionSize}
              />
              <span className="tw-ml-2">{city}</span>
            </div>
          </div>
        </div>

        <div className="description-and-actions">
          <ResourcesQuickActions result={result} />
        </div>
      </div>
    </div>
  );
};

export default SearchResultItem;
