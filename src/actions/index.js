require('es6-promise').polyfill();
import axios from 'axios';
import config from '../config';

const ROOT_URL = 'https://api.foursquare.com/v2/venues/explore?query=cakes+pies&v=20160617&venuePhotos=1';
const PLACE_URL = 'https://api.foursquare.com/v2/venues/';
const CLIENT_ID = config.client_id;
const CLIENT_SECRET = config.client_secret;

export const GET_CAKES = 'GET_CAKES';
export const GET_DETAILS = 'GET_DETAILS';
export const GET_PHOTOS = 'GET_PHOTOS';


export function getCakes(location) {
    const request = axios.get(`${ROOT_URL}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&near=${location}`);
    return {
        type: GET_CAKES,
        payload: request
    }
}

export function getDetails(id) {
    const request = axios.get(`${PLACE_URL}${id}?&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20160617`);
    return {
        type: GET_DETAILS,
        payload: request
    }
}

export function getPhotos(id) {
    const request = axios.get(`${PLACE_URL}${id}/photos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20160617`);
    return {
        type: GET_PHOTOS,
        payload: request
  }
}
