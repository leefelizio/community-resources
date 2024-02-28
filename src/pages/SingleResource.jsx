// SingleResource.js

import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../utils/functions";
import { iconActionSizeS, randomId } from "../utils/constants";
import ResourcesQuickActions from "../components/resources/ResourcesQuickActions";

const SingleResource = () => {
  const { id } = useParams();
  const location = useLocation();
  const iconActionSize = 32;
  // V2 - TO DO - const createdAt = result.createdAt
  // V2 - TO DO -
  // const imgUrl = location.state.imgUrl;
  // const address = location.state.address;
  const city = location.state.city;
  const createdAt = location.state.createdAt;
  const description = location.state.description;
  const email = location.state.email;
  const tags = location.state.tags;
  const link = location.state.link;
  const openFromTime = location.state.openFromTime;
  const openToTime = location.state.openToTime;
  const phone = location.state.phone;
  const title = location.state.title;
  const googleMaps = location.state.googleMaps;

  const { imgUrl, address } = location.state;
  const result = {
    phone,
    email,
    googleMaps,
    link,
  };
  return (
    <div className="bg-grad-orange-washed tw-min-h-screen single-resource-page">
      <div className="single-resource-ctn">
        <div className="page-container">
          <div className="resource-item">
            <h2 className="">{title}</h2>
            {tags && (
              <div className="tags-container">
                {tags.map((tag) => {
                  const tagItem = tag.replace(/-/g, " ");
                  return (
                    <span
                      key={randomId}
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
                    alt="Country"
                    title="Country"
                    src="../assets/icons/icon-country.png"
                    width={iconActionSizeS}
                    height={iconActionSizeS}
                  />
                  <span className="tw-ml-2">Swtizerland</span>
                </div>

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

                <div className="resources-quick-info">
                  <img
                    alt="Address"
                    title="Address"
                    src="../assets/icons/icon-address.png"
                    width={iconActionSizeS}
                    height={iconActionSizeS}
                  />
                  <span className="tw-ml-2">{address}</span>
                </div>

                <div className="resources-quick-info">
                  <img
                    alt="Open hours"
                    title="Open hours"
                    src="../assets/icons/icon-open-hours.png"
                    width={iconActionSizeS}
                    height={iconActionSizeS}
                  />
                  <span className="tw-ml-2">{`From ${openFromTime} to ${openToTime}`}</span>
                </div>

                <div className="resources-quick-info">
                  <img
                    alt="Phone"
                    title="Phone"
                    src="../assets/icons/icon-phone.png"
                    width={iconActionSizeS}
                    height={iconActionSizeS}
                  />
                  <span className="tw-ml-2">{phone}</span>
                </div>

                <div className="resources-quick-info">
                  <img
                    alt="Email"
                    title="email"
                    src="../assets/icons/icon-email.png"
                    width={iconActionSizeS}
                    height={iconActionSizeS}
                  />
                  <Link
                    to={`mailto:${email}`}
                    target={"_blank"}
                    className="tw-ml-2"
                  >
                    {email}
                  </Link>
                </div>

                <div className="resources-quick-info">
                  <img
                    alt="Link"
                    title="Link"
                    src="../assets/icons/icon-link.png"
                    width={iconActionSizeS}
                    height={iconActionSizeS}
                  />
                  <Link to={link} target={"_blank"} className="tw-ml-2">
                    {link}
                  </Link>
                </div>
              </div>
              <div className="description-and-actions">
                <p>{description}</p>
                <ResourcesQuickActions result={result} />
              </div>
            </div>

            <div className="tw-mt-8">
              <img src={`${imgUrl}`} alt={title} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleResource;
