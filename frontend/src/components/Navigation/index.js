import { NavLink } from 'react-router-dom';
import {useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import SearchBar from '../SearchBar';
import './Navigation.css';
import icon from '../../images/Music.png';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <>
                <ProfileButton user={sessionUser} />
                <NavLink to='/venues' id='venueLoggedIn'>Venues</NavLink>
            </>
        );
    } else {
        sessionLinks = (
            <>
                <div className='loginSignup'>
                    <NavLink to='/login' id='homeLogin'>Log In</NavLink>
                    <NavLink to='/signup' id='homeSignup'>Sign Up</NavLink>
                    <NavLink to='/venues' id='venueLink'>Venues</NavLink>
                    <SearchBar />
                </div>
            </>
        );
    }
    return (
        <ul>
            <li className='navBar'>
                <NavLink exact to='/' id='homeLink'>
                    AirStage
                    <img src={icon} alt='AirStage Icon' id='musicIcon'/>
                </NavLink>
                {isLoaded && sessionLinks}
            </li>

        </ul>
    );
}

export default Navigation;
