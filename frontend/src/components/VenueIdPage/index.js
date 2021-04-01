import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './venueId.css';

function VenueIdPage() {
    const { id } = useParams();


    const venue = useSelector(state => {
        return state.venue[id];
    })

    const handleSubmit = (e) => {
        e.preventDefault()

    }

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
                    <li>{venue.concertDate}</li>
                    <li>{venue.city}</li>
                    <li>{venue.state}</li>
                </ul>
                <img className='venue-image' src={venue.bookingImgUrl} alt='Venue'/>
                <button className='booking-button' onClick={(e) => handleSubmit(e)}>Book Venue</button>
            </div>
        </>

    )

}

export default VenueIdPage;
