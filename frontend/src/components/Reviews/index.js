import './Reviews.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { editReview, createReview } from '../../store/review';
import { NavLink, Route, useHistory, useParams } from 'react-router-dom';



function Reviews() { //this is venueId
    const { id } = useParams();
    // const dispatch = useDispatch();
    const reviews = useSelector(state => state.review)
    const history = useHistory();
    const user = useSelector(state => state.session.user);

    console.log(reviews)


    // useEffect(() => {
    //     // dispatch(editReview());
    // }, [dispatch, ])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user) {
            history.push(`/reviews/${id}`);

        } else {
            history.push('/login');
        }

    }

    if (!reviews) return null;

    let sessionLinks;
    if (user) {
        sessionLinks = (
            <>
                <button onClick={handleSubmit}>
                    Create a Review here!
                </button>
            </>
        )
    }
    if (!user) return null;

    return (
        <div className='reviews-container'>
            <h2>REVIEWS</h2>
            <ul className='reviews-list' key={reviews.id}>
                {Object.values(reviews).map((review, i) => (
                    <>
                        <li key={`li1-${i}`}>
                            {review.title}
                        </li>
                        <li key={`li2-${i}`}>
                            {review.body}
                        </li>
                        <li key={`li3-${i}`}>
                            Rating: {review.rating}
                        </li>
                    </>
                ))}
            </ul>
            {sessionLinks}
        </div>
    )
};

export default Reviews;
