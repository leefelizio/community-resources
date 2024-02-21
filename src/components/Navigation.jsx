import { NavLink, Outlet } from "react-router-dom";

export function Navigation() {
// TO DO - Google Auth conditional - Maybe put all in a const
  // currentUser==='LeeFelizio' || currentUser === isConnected ?  
  // <NavLink to="#####">Insert Content</NavLink>
  // <NavLink to="#####">Logout</NavLink>
  // : 
  // <NavLink to="#####">Login</NavLink>

    return <>
    <header className="tw-mb-6 tw-bg-gray-900">
      <nav className="tw-container tw-flex tw-items-center tw-justify-between tw-flex-wrap tw-p-6">

        <NavLink to="/" className="tw-no-underline tw-flex tw-items-center tw-flex-shrink-0 tw-text-white tw-mr-6">
          <img alt="Community Resources logo" title="Community Resources logo" src="./src/assets/images/logo.png" width={42} height={42} />
          <div className="tw-flex tw-flex-col">
            <h1 className="tw-font-semibold tw-my-0 tw-text-xl tw-tracking-tight tw-pl-2">
              Community Resources
            </h1>
            <h2 className="tw-font-semibold tw-my-0 tw-text-xs tw-tracking-tight tw-pl-2">
              LGBTQIA+ Switzerland
            </h2>
          </div>
        </NavLink>

        <div className="tw-block lg:tw-hidden">
          <button data-collapse-toggle="navbar-default" aria-controls="navbar-default" aria-expanded="false" className="tw-flex tw-items-center tw-px-3 tw-py-2 tw-border tw-rounded tw-text-teal-200 tw-border-teal-400 hover:tw-text-white hover:tw-border-white">
            <svg className="tw-fill-current tw-h-3 tw-w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div className="tw-w-full tw-block tw-flex-grow lg:tw-ml-3 lg:tw-flex lg:tw-items-center lg:tw-w-auto" id="navbar-default">
          <div className="tw-text-sm lg:tw-flex-grow">
            <NavLink to="/" className="tw-no-underline tw-block tw-mt-4 lg:tw-inline-block lg:tw-mt-0 tw-text-teal-200 hover:tw-text-white tw-mr-4">
              Home
            </NavLink>
            <NavLink to="/contact" className="tw-no-underline tw-block tw-mt-4 lg:tw-inline-block lg:tw-mt-0 tw-text-teal-200 hover:tw-text-white tw-mr-4">
              Online Resources
            </NavLink>
            <NavLink to="/contact" className="tw-no-underline tw-block tw-mt-4 lg:tw-inline-block lg:tw-mt-0 tw-text-teal-200 hover:tw-text-white tw-mr-4">
              Contact
            </NavLink>
          </div>
          <div>
            <NavLink to="#" className="tw-no-underline tw-inline-block tw-text-sm tw-mr-3 tw-px-4 tw-py-2 tw-leading-none tw-border tw-rounded tw-text-white tw-border-white hover:tw-border-transparent hover:tw-text-teal-500 hover:tw-bg-white tw-mt-4 lg:tw-mt-0">
                Login
            </NavLink>            
            <NavLink to="/insert" className="tw-no-underline tw-inline-block tw-text-sm tw-px-4 tw-py-2 tw-leading-none tw-border tw-rounded tw-text-white tw-border-white hover:tw-border-transparent hover:tw-text-teal-500 hover:tw-bg-white tw-mt-4 lg:tw-mt-0">
            Insert Content
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
    <div className="tw-container">
        <Outlet />
    </div>
    </>
}