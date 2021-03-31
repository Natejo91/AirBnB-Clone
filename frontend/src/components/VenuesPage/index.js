import { getVenues } from '../../store/venue';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import VenueIdPage from '../VenueIdPage/index';
import './Venues.css';

function VenuesPage() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getVenues())
    }, [dispatch]);

    const venues = useSelector(state => {
        // console.log(state.venue, 'inside useSelector')
       return state.venue
    });
    // console.log(venues, 'after useSelector');

    if (!venues) return null;

    let sessionLinks;
        sessionLinks = (
            <ul>
                {Object.values(venues).map(venue => (
                    <li key={`li-${venue.id}`}>
                            {/* May need to come back and alter this route, had to add api to make it work*/}
                            <NavLink to={`/venues/${venue.id}`} key={venue.id}>
                                {/* this will be the venue image eventually*/}
                                {venue?.title}
                            </NavLink>
                        </li>
                ))}
            </ul>
        )
        return (
            <div id='venueContainer'>
                {/* <VenueIdPage /> */}
                {sessionLinks}
            </div>
    )
}

export default VenuesPage;
