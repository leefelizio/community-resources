import { NavLink, Outlet } from "react-router-dom";
import { useToggle } from "../hooks/useToggle";

export function Navigation() {
  // V2 - TO DO - Google Auth conditional
  // currentUser==='specificUser' || currentUser === isConnected ?
  // <NavLink to="#####">Insert Content</NavLink>
  // <NavLink to="#####">Logout</NavLink>
  // :
  // <NavLink to="#####">Login</NavLink>

  const [invisible, toggleInvisible] = useToggle(true);

  return (
    <>
      <header>
        <nav>
          <NavLink
            to="/"
            title="Homepage - Community Resources LGBTQIA+ Switzerland"
            className="tw-cursor-pointer tw-no-underline tw-flex tw-items-center tw-flex-shrink-0 tw-text-white tw-mr-6"
          >
            <img
              alt="Community Resources logo"
              title="Community Resources logo"
              src="./assets/icons/logo/logo-community-resources.png"
              width={42}
              height={42}
            />
            <div className="tw-flex tw-flex-col">
              <h1 className="tw-font-semibold tw-my-0 tw-text-xs tw-tracking-tight tw-pl-2 tw-text-teal-200">
                Community Resources
              </h1>
              <h2 className="tw-font-semibold tw-my-0 tw-text-xl tw-tracking-tight tw-pl-2">
                LGBTQIA+ Switzerland
              </h2>
            </div>
          </NavLink>

          <div className="tw-block lg:tw-hidden" onClick={toggleInvisible}>
            <button
              data-collapse-toggle="nav-items-ctn"
              aria-controls="nav-items-ctn"
              aria-expanded="false"
              className="tw-flex tw-items-center tw-px-3 tw-py-2 tw-border tw-rounded tw-text-teal-200 tw-border-teal-400 hover:tw-text-white hover:tw-border-white"
            >
              <svg
                className="tw-fill-current tw-h-3 tw-w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            id="nav-items-ctn"
            className={invisible ? `tw-hidden` : `tw-block`}
          >
            <div className="tw-mr-6">
              <NavLink to="/" title="Home" className="nav-item">
                Home
              </NavLink>
              <NavLink
                to="health-professionals"
                title="Health Professionals"
                className="nav-item"
              >
                Health Professionals
              </NavLink>
              <NavLink
                to="support-groupes"
                title="Support Groups"
                className="nav-item"
              >
                Support Groups
              </NavLink>
              <NavLink to="/contact" title="Contact" className="nav-item">
                Contact
              </NavLink>
            </div>
            <div>
              {/* V2 -- TO DO - Google Auth 
            <NavLink to="#" className="tw-no-underline tw-inline-block tw-text-sm tw-mr-3 tw-px-4 tw-py-2 tw-leading-none tw-border tw-rounded tw-text-white tw-border-white hover:tw-border-transparent hover:tw-text-teal-500 hover:tw-bg-white tw-mt-4 lg:tw-mt-0">
                Login
            </NavLink>             
            */}
              <NavLink
                to="/insert"
                className="tw-no-underline tw-inline-block tw-text-sm tw-px-4 tw-py-2 tw-leading-none tw-border tw-rounded tw-text-white tw-border-white hover:tw-border-transparent hover:tw-text-teal-500 hover:tw-bg-white tw-mt-4 lg:tw-mt-0"
              >
                Insert Content
              </NavLink>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
