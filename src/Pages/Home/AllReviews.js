import React, { useEffect, useState } from 'react';
import Reviews from './Reviews';


const AllReviews = () => {
    const [reviews , setReviews] = useState([]);

    useEffect(()=>{
        // fetch("reviews.json")
        fetch("http://localhost:5000/review")
          .then((res) => res.json())
          .then((data) => setReviews(data));
    },[])


    return (
        <div className='bg-white-100 pb-24 w-full'>
            <h2 className='uppercase text-3xl text-center pt-24 pb-24 font-bold'>what our clients says!</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 gap-6 lg:w-3/4 w-full mx-auto'>
                {
                    reviews.map(review => <Reviews key={review.id} review={review}></Reviews>)
                }
            </div>
        </div>
    );
};

export default AllReviews;