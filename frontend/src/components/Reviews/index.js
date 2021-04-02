import './Reviews.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Reviews() {
    const reviews = useSelector(state => state.review)
    console.log(reviews)


    return (
        <>
            <h2>REVIEWS</h2>
            <ul>
                {Object.values(reviews).map(review => (
                    <li key={review.title}>
                      {review.title}
                      {review.body}
                      {review.rating}
                    </li>
                ))}
            </ul>
        </>
    )
};

export default Reviews;
