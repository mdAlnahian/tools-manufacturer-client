import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import UseAdmin from '../../hooks/UseAdmin';


const Dashboard = () => {

  const [user] = useAuthState(auth);
  const [admin] = UseAdmin(user);

    return (
      <div className="lg:pt-24 pt-14 lg:px-24 bg-base-100 pb-16">
        <div class="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
          <div class="drawer-content px-12 pt-12 bg-base-100">
            <Outlet></Outlet>
          </div>
          <div class="drawer-side">
            <label for="my-drawer-2" class="drawer-overlay"></label>
            <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
              {/* <!-- Sidebar content here --> */}
              {admin || (
                <li className="mb-2">
                  <NavLink to="/dashboard/myorder">My Order</NavLink>
                </li>
              )}
              {admin || (
                <li className="mb-2">
                  <NavLink to="/dashboard/review">My Review</NavLink>
                </li>
              )}
              <li className="mb-2">
                <Link to="/dashboard">My profile</Link>
              </li>
              {admin && (
                <li className="mb-2">
                  <NavLink to="/dashboard/user">Make Admin</NavLink>
                </li>
              )}
              {admin && (
                <li className="mb-2">
                  <NavLink to="/dashboard/addproduct">Add Product </NavLink>
                </li>
              )}
              {admin && (
                <li className="mb-2">
                  <NavLink to="/dashboard/allorder">All Orders </NavLink>
                </li>
              )}
              {admin && (
                <li className="mb-2">
                  <NavLink to="/dashboard/manageitem">Manage Items</NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Dashboard;