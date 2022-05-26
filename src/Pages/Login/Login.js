import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import Loading from '../../Shared/Loading';
import UseToken from '../../hooks/UseToken';


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const [signInWithEmailAndPassword, user, loading, error] =
      useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gloading, gError] = useSignInWithGoogle(auth);

    const [token] = UseToken(user || gUser);


    const navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    

     if (loading || gloading) {
       return <Loading></Loading>
     }
     //user || gUser
     if (token) {
       navigate(from, { replace: true });
     }


    const handleUserSignIn = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(email, password);
    };

    return (
      <div class="hero min-h-screen bg-orange-200">
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <h2 className="text-3xl">Login</h2>
            <form onSubmit={handleUserSignIn}>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  class="input input-bordered"
                  name="email"
                  required
                  onBlur={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  class="input input-bordered"
                  name="password"
                  required
                  onBlur={(e) => setPassword(e.target.value)}
                />
                {<p style={{ color: "red" }}>{error?.message}</p>}
                {<p style={{ color: "red" }}>{gError?.message}</p>}

                {/* {<h1>{loading ? <Loading></Loading> : ""} </h1>}
                {<h1>{gloading ? <Loading></Loading> : ""} </h1>} */}
                <label class="label">
                  <Link to="#" class="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
                <small className="text-center mt-4">
                  <p>
                    New to Bros?
                    <Link className="text-secondary" to="/register">
                      Please Register
                    </Link>
                  </p>
                </small>
              </div>
              <div class="form-control mt-2">
                <button
                  // onClick={() => signInWithEmailAndPassword(email, password)}
                  class="btn btn-primary"
                >
                  Login
                </button>
              </div>
            </form>
            <div class="divider">OR</div>
            <div class="form-control">
              <button
                onClick={() => signInWithGoogle()}
                class="btn btn-outline btn-neutral font-bold"
              >
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};


export default Login;