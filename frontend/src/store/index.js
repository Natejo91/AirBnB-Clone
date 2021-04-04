import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import searchReducer from "./search";
import sessionReducer from './session';
import venueReducer from './venue';
import reservationReducer from './reservation';
import reviewReducer from './review';
import userReviewReducer from './userReviews';

const rootReducer = combineReducers({
  // add reducer functions here
  session: sessionReducer,
  venue: venueReducer,
  search: searchReducer,
  reservation: reservationReducer,
  review: reviewReducer,
  userReview: userReviewReducer
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
