import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../utils/functions";
import { iconActionSizeS, randomId } from "../utils/constants";
import ResourcesQuickActions from "../components/resources/ResourcesQuickActions";

const SingleResource = () => {
  const { id } = useParams();
  const location = useLocation();
  const {
    imgUrl,
    address,
    city,
    description,
    email,
    tags,
    link,
    openFromTime,
    openToTime,
    phone,
    title,
    googleMaps,
  } = location.state;
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
                      key={`tag--resId-${id}-${randomId}`}
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
