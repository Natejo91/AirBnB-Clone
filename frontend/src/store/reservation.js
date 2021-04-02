// this is where we make our fetch call to POST a booking in our reservation table
// what we need to send to our database is the userId and venueId
// we can get the venueId for the reservation table by grabing the params when we are on the venueIdPage
// we can do this same logic for the searchIdPage
// we can get the userId with the useSelector to get the userId from state.session

import { csrfFetch } from './csrf';

const SET_RESERVATION = 'booking/setReservation';
const GET_RESERVATION = 'booking/getReservation';

const setReservation = (userId, venueId) => ({
        type: SET_RESERVATION,
        payload: { userId, venueId }
});

const getRes = (userId) => ({
    type: GET_RESERVATION,
    userId
})

export const bookReservation = (reserverId, venueId) => async (dispatch) => {
    const response = await csrfFetch(`/api/reservations`, {
        method: 'POST',
        body: JSON.stringify({
            venueId,
            reserverId
        })
    })
    if (response.ok) {
        const data = await response.json();
        return dispatch(setReservation(data))
    }
}

export const getReservation = (userId) => async (dispatch) => {
    const response = await csrfFetch(`/api/reservations/${userId}`);
    if (response.ok) {
        console.log(response);
        const data = await response.json();
        console.log(data);
        return dispatch(getRes(data));
    }
}

// need reducer here

const reservationReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case SET_RESERVATION:
            newState = action.payload;
            return newState;
        case GET_RESERVATION:
            newState = action.userId;
            return newState;
        default:
            return state;
    }
}

export default reservationReducer;

// newState = Object.assign({}, state);
// for (let i = 0; i < action.payload.length; i++) {
//     const key = action.payload[i].id;
//     newState[key] = action.payload[i];
// }
// return newState;
