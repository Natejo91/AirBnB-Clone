import { useSelector, useDispatch } from 'react-redux';
import ReservationsPage from '../ReservationsPage';
import UserReviews from '../UserReviews';

function HomePage() {
    const user = useSelector(state => state.session.user)

    let sessionLinks;
    if (user) {
        sessionLinks = (
            <>
                <ReservationsPage />
                <UserReviews />
            </>
        )
    } else {
        sessionLinks = (
            <>
            </>
        )
    }
    return (
        <>
            {sessionLinks}
        </>

    )
}

export default HomePage;
