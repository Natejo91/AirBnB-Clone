import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './venueId.css';

function VenueIdPage() {
    const { id } = useParams();


    const venue = useSelector(state => {
        return state.venue[id];
    })

    return (
        <>
            <div className='venue-id'>
                {console.log(venue, 'venueIdPage')}
                <h2>{venue.title}</h2>
                <ul className='venueList'>
                    <li>{venue.description}</li>
                    <li>{venue.maxGuests}</li>
                    <li>{venue.dailyCost}</li>
                    <li>{venue.address}</li>
                    <li>{venue.city}</li>
                    <li>{venue.state}</li>
                </ul>
            </div>
        </>

    )

}

export default VenueIdPage;
