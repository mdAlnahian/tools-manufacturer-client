import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
      <div className="lg:pt-20 pt-14 lg:px-24 bg-base-100">
        <div class="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
          <div class="drawer-content px-12 pt-12 bg-base-100">
            {/* <!-- Page content here --> */}
            {/* <label
              for="my-drawer-2"
              class="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label> */}
            <Outlet></Outlet>
          </div>
          <div class="drawer-side">
            <label for="my-drawer-2" class="drawer-overlay"></label>
            <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
              {/* <!-- Sidebar content here --> */}
              <li className="mb-2">
                <Link to="/dashboard">My Order</Link>
              </li>
              <li className="mb-2">
                <NavLink to="/dashboard/review">My Review</NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/dashboard/profile">My profile</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Dashboard;