import { Link } from "react-router-dom";

export function Contact() {
  return (
    <div className="bg-grad-orange-washed tw-min-h-screen tw-text-slate-900">
      <div className="page-container">
        <h2 className="page-title">Contacter</h2>

        <div>
          <p className="tw-text-lg tw-font-bold">
            Please, feel free to contact us anytime.
          </p>
          <div>
            <Link
              to={`mailto:hello@communityresources.com`}
              className="tw-text-2xl tw-font-bold tw-text-slate-900"
            >
              hello@communityresources.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
