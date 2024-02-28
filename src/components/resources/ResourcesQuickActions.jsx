import { Link } from "react-router-dom";
import { iconActionSize } from "../../utils/constants";

const ResourcesQuickActions = ({ result }) => {
  const { phone, email, googleMaps, link } = result;

  return (
    <div className="resources-quick-actions">
      <Link to={`tel:${phone}`} className="resource-quick-actions-item">
        <img
          className="tw-mb-2"
          title="country"
          src="../assets/icons/icon-action-phone.png"
          width={iconActionSize}
          height={iconActionSize}
        />
      </Link>
      <Link to={`mailto:${email}`} className="resource-quick-actions-item">
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
      <Link to={link} target={"_blank"} className="resource-quick-actions-item">
        <img
          className="tw-mb-2"
          title="Go to website"
          src="../assets/icons/icon-action-link.png"
          width={iconActionSize}
          height={iconActionSize}
        />
      </Link>
    </div>
  );
};
export default ResourcesQuickActions;
