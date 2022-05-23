import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link , NavLink } from 'react-router-dom';
import auth from '../firebase.init';

const Navbar = () => {
  const [user] = useAuthState(auth);
  // console.log(user);

    const handleSignOut = () => {
      signOut(auth);
    };

    return (
      <div class="navbar bg-orange-100 fixed top-0 z-50 lg:px-24">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/purchase">Purchase</NavLink>
              </li>
              <li>
                {user ? <NavLink to="/dashboard">Dashboard</NavLink> : ""}
              </li>
              <li>
                {user && (
                  <h1>{user.displayName ? user.displayName : "User"}</h1>
                )}
              </li>
              <li>
                {user ? (
                  <Link to="" onClick={handleSignOut}>
                    SignOut
                  </Link>
                ) : (
                  //  && <h1>{user.displayName}</h1>
                  <NavLink to="/login">Login</NavLink>
                )}
              </li>
            </ul>
          </div>
          <Link to="#" class="btn btn-ghost normal-case text-xl">
            BigBros | Limited.
          </Link>
        </div>
        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/purchase">Purchase</NavLink>
            </li>
            <li>{user ? <NavLink to="/dashboard">Dashboard</NavLink> : ""}</li>
            <li>
              {user && <h1>{user.displayName ? user.displayName : "User"}</h1>}
            </li>
            <li>
              {user ? (
                <Link to="" onClick={handleSignOut}>
                  SignOut
                </Link>
              ) : (
                // && <h1>{user.displayName}</h1>
                <NavLink to="/login">Login</NavLink>
              )}
            </li>
          </ul>
        </div>
        <div className="navbar-end lg:hidden">
          <label
            tabIndex="1"
            for="my-drawer-2"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
      </div>
    );
};

export default Navbar;