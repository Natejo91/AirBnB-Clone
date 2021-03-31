import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getVenue } from '../../store/venue';

export default function VenueIdPage() {
    const { id } = useParams();
    const [ currentId, setCurrentId ] = useState(id);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(id, '------------');
        dispatch(getVenue(id))
    }, [dispatch, id]);

    const venue = useSelector(state => {
        return state.venue[id];
    })

    return (
        <div className='venueId'>
            {console.log(venue, 'venueIdPage')};
            <h2>{venue.title}</h2>
            <ul>
                <li>{venue.description}</li>
                <li>{venue.maxGuests}</li>
                <li>{venue.dailyCost}</li>
                <li>{venue.address}</li>
                <li>{venue.city}</li>
                <li>{venue.state}</li>
            </ul>
        </div>

    )

}
