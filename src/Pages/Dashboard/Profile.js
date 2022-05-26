import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';

const Profile = ({p}) => {
    const [user, loading] = useAuthState(auth);


    if (loading){
        return <Loading></Loading>
    }
      return (
        <div>
          <img
            className="w-50 h-50 rounded-full mb-4"
            src={user.photoURL}
            alt="add your profile"
          />
          <h2 className="text-xl pb-4">
            My Location is :
            <span className="font-bold">
              {p.location ? p.location : "Add your location"}
            </span>
          </h2>
          <h2 className="text-xl pb-4">
            My Educational Qualification :
            <span className="font-bold">
              {p.education ? p.education : "Add your Education"}
            </span>
          </h2>
          <h2 className="text-xl pb-4">
            My Linkdin Profile Link is :
            <span className='font-bold'>
              {p.linkedin ? p.linkedin : "Add your Linkedin profile link"}
            </span>
          </h2>
          <h2 className="text-xl pb-4">
           
              My phone number is :  <span className="font-bold">{p.phone ? p.phone : "Add your Phone number"}
            </span>
          </h2>
        </div>
      );
};

export default Profile;