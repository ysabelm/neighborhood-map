import { CLIENT_ID, CLIENT_SECRET } from './data/credentials';

const CLIENT_ID = {CLIENT_ID};
const CLIENT_SECRET = {CLIENT_SECRET};
const API = "https://api.foursquare.com/v2";
const VERSION = "20180828";

const RADIUS = 250;
const SEARCH_RESULTS = 1;
// Add a category parameter
const CATEGORIES = {}

// Return a venue id from FourSquare including lat, lng & name.

export const getSearchResult = (lat, lng, name) =>
	fetch(`${API}/venues/search?ll=${lat},${lng}&limit=${SEARCH_RESULTS}&radius=${RADIUS}&query=${name}
    	&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=${VERSION}`)
	  	.then(response=>response.json())
	  	.then(response=>response.response.venues[0].id)
	  	.catch('error')

//Return an array of details about a place from FourSquare. Takes venue id.

export const getDetails = (id) =>
	fetch(`${API}/venues/${id}?&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=${VERSION}`)
  		.then(res => res.json())
  		.catch('error')