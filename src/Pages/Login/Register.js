import React, { useState  } from "react";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link , useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';
import UseToken from "../../hooks/UseToken";


const Register = () => {
  // const [name , setName] = useState(" ");
  // const [userName , setUserName] = useState('');


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const [createUserWithEmailAndPassword, user, loading, uError] =
    useCreateUserWithEmailAndPassword(auth);

  const [signInWithGoogle, gUser, gloading, gError] = useSignInWithGoogle(auth);

  const [token] = UseToken(user || gUser);

   const navigate = useNavigate();

  if (loading || gloading) {
    return <Loading></Loading>;
  }

  if (token) {
    // console.log(user || gUser);
    // 
    navigate('/')
    
  }

  const handleCreateUser = async (event) => {
    event.preventDefault();

    await createUserWithEmailAndPassword(email, password, userName);
  };

  return (
    <div class="hero min-h-screen bg-orange-200">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <h2 className="text-3xl">Register</h2>
          <form onSubmit={handleCreateUser}>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                onBlur={(e) => setUserName(e.target.value)}
                type="text"
                placeholder="Name"
                class="input input-bordered"
                required
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                onBlur={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                class="input input-bordered"
                // name="email"
                required
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                onBlur={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                class="input input-bordered"
                // name="password"
                required
              />
              {<p style={{ color: "red" }}>{uError?.message}</p>}
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
                  Already Have an accout
                  <Link className="text-secondary" to="/login">
                    Please Login
                  </Link>
                </p>
              </small>
            </div>
            <div class="form-control mt-2">
              <button
                // onClick={() => signInWithEmailAndPassword(email, password)}
                class="btn btn-primary"
              >
                Register
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

export default Register;