import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../../Shared/Loading";
import Profile from "./Profile";

const MyProfile = () => {
  // const {id} =useParams();

  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const [profile, setProfile] = useState();
  useEffect(() => {
    fetch(`https://sheltered-beach-60014.herokuapp.com/userinfo`)
      .then((res) => res.json())
      .then((data) => {
        //  console.log(data);
        setProfile(data);
      });
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  const handleUserInfo = (e) => {
    e.preventDefault();
    const education = e.target.education.value;
    const location = e.target.location.value;
    const linkedin = e.target.linkedin.value;
    const phone = e.target.phone.value;

    let updateInfo = { education, location, linkedin, phone };
    console.log(updateInfo);

    //appliying PUT method to update or add the extra infos of user
    const url = `https://sheltered-beach-60014.herokuapp.com/userinfo`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success(
          `${user?.displayName} ,Your Information Added Successfully 😀`,
          {
            position: toast.POSITION.TOP_CENTER,
          }
        );
        navigate(`/`);
      });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <h2 className="text-2xl mb-4 pt-2">
          Hi I am{" "}
          <span className="font-bold">
            {user.displayName ? user.displayName : "Random User"}
          </span>
        </h2>
        <h2 className="text-xl mb-2">
          This is my Email address :{" "}
          <span className="font-bold">{user?.email}</span>
        </h2>
        {/* <h1 className="text-2xl mb-4">
            {" "}
            If you want you can add the information mentioned below 💥
          </h1> */}
        <div>
          {
            profile?.map((p) => (
              <Profile key={p._id} p={p}></Profile>
            ))
            //     <h2>My Location is : </h2>
            // <h2> I am studying at : </h2>
            // <h2> My Linkdin Profile Link is : </h2>
            // <h2> My phone number is : </h2>
          }
        </div>
      </div>
      <div className="pt-12 lg:pt-0">
        <h2 className="text-2xl text-center font-bold pb-6">
          Dont forget to Add or Update your Information😀
        </h2>
        <div className="flex justify-center item-center">
          <form onSubmit={handleUserInfo}>
            {/* onSubmit={handleConfirmOrder} */}
            {/* add this to above */}
            <div>
              <label class="label">
                <span class="label-text">Your Education</span>
              </label>
              <input
                type="text"
                name="education"
                placeholder="Education"
                // value={user.displayName ? user.displayName : "RandomUser"}
                class="input input-bordered input-primary w-full max-w-xs text-xl text-accent font-bold"
                required
              />
            </div>
            <div>
              <label class="label">
                <span class="label-text">Location</span>
              </label>
              <input
                type="text"
                name="location"
                placeholder="Your Location"
                // value={user?.email || ""}
                class="input input-bordered input-primary w-full max-w-xs text-accent font-bold mb-2"
                required
              />
            </div>
            <div>
              <label class="label">
                <span class="label-text">Your Linkedin profile</span>
              </label>
              <input
                type="text"
                placeholder="Provide Your Address"
                name="linkedin"
                class="input input-bordered input-primary w-full max-w-xs text-accent font-bold mb-2"
                required
              />
            </div>
            <div>
              <label class="label">
                <span class="label-text">Phone Number</span>
              </label>
              <input
                type="number"
                placeholder="Phone Number"
                name="phone"
                class="input input-bordered input-primary w-full max-w-xs text-accent font-bold mb-2"
                required
              />
            </div>
            <br />
            <div>
              <button class="btn w-2/4">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
