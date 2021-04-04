import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './SignupForm.css';
import * as sessionActions from '../../store/session';


function SignupFormPage() {
    const [ firstname, setFirstname ] = useState('');
    const [ lastname, setLastname ] = useState('');
    const [ address, setAddress] = useState('');
    const [ city, setCity ] = useState('');
    const [ state, setState ] = useState('');
    const [ username, setUsername ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');
    const [ validationErrors, setValidationErrors ] = useState([]);
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);

    if (sessionUser) return <Redirect to='/' />;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setValidationErrors([]);
            return dispatch(sessionActions.signUp({ firstname, lastname, email, username, password, address, city, state }))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setValidationErrors(data.errors);
                });
        }
        return setValidationErrors(['Confirm Password field must be the same as the Password field']);
    };

    return (
      <div className='signupContainer'>
        <form onSubmit={handleSubmit} className='signupForm'>
          <ul className='errors'>
            {validationErrors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
          <h2 id='signupTitle'>Sign up</h2>
          <label>
            Firstname
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
          </label>
          <label>
            Lastname
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
          </label>
          <label>
            Email
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Username
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <label>
            Confirm Password
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </label>
          <label>
            Address
            <input
              type="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </label>
          <label>
            City
            <input
              type="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </label>
          <label>
            State
            <input
              type="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </label>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
}

export default SignupFormPage
