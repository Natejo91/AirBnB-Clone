import { getVenues } from '../../store/venue';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
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

        return (
            <div id='venueContainer'>
                <ul>
                    {Object.values(venues).map(venue => (
                        <li key={`li-${venue.id}`}>
                            <span className='venue-title'>{venue.title}</span>
                            <NavLink to={`/venues/${venue.id}`} key={venue.id}>
                                <img id='venue-image' src={venue.bookingImgUrl} alt='Venue'/>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
    )
}

export default VenuesPage;
