import React, { useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    fetch('/reviews.json')
    .then(res => res.json())
    .then(data => setReviews(data))

    return (
        <div className='w-[80%] mx-auto mt-20'>
            <h2 className='text-5xl font-semibold text-center'>Client's Review</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    reviews.map(singleReview => <Review key={singleReview.id} singleReview={singleReview}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;