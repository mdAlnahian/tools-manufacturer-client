import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';

const MyReview = () => {
     const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    //trying to load spinners
      if (loading) {
        return <Loading></Loading>;
      }

    const handleConfirmOrder =(e)=>{
        e.preventDefault();
        const name = e.target.name.value ; 
        const description = e.target.description.value ; 
        const img = e.target.img.value ;
        let ratings = e.target.ratings.value ; 
        if(ratings.length > 5){
            return (
                alert('Star ratings cannot be more than 5')
            )
        }

        let addedReview = { name , description , ratings , img }
        console.log(addedReview);

        // Now applying the post method for showing data

        const url = `http://localhost:5000/review`;
        fetch( url , {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(addedReview),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              alert(`${user.displayName} ,Your Review Added Successfully 😀`);
              navigate(`/`);
            }
          
          });


    }
    return (
      <div>
        <h2 className="text-2xl text-center font-bold pb-6">
          Dont forget to Add your Review😀
        </h2>
        <div className="flex justify-center item-center">
          <form onSubmit={handleConfirmOrder}>
            <div>
              <label class="label">
                <span class="label-text">What is your name?</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={user.displayName ? user.displayName : "RandomUser"}
                class="input input-bordered input-primary w-full max-w-xs text-xl text-accent font-bold"
                readOnly
              />
            </div>
            <div>
              <label class="label">
                <span class="label-text">Description</span>
              </label>
              <input
                type="text"
                name="description"
                placeholder="Add description here"
                // value={user?.email || ""}
                class="input input-bordered input-primary w-full max-w-xs text-accent font-bold mb-2"
              />
            </div>

            <div>
              <label class="label">
                <span class="label-text">Ratings</span>
              </label>
              <input
                type="text"
                placeholder="Use star imoji by pressing (windows +;)"
                name="ratings"
                class="input input-bordered input-primary w-full max-w-xs text-accent font-bold mb-2"
                required
              />
            </div>

            <div>
              <label class="label">
                <span class="label-text">Image</span>
              </label>
              <input
                type="text"
                placeholder="Add your image link here"
                name="img"
                class="input input-bordered input-primary w-full max-w-xs text-accent font-bold mb-2"
              />
            </div>
            <br />
            <div>
              <button class="btn w-2/4">Add Review</button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default MyReview;