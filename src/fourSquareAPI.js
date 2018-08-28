import { CLIENT_ID, CLIENT_SECRET } from './data/credentials';

const API = "https://api.foursquare.com/v2/";
const VERSION = "20180828";

const RADIUS = 500;
const SEARCH_RESULTS = 25;
const CATEGORIES = {
  wine_bar: '4bf58dd8d48988d123941735',
  wine_shop: '4bf58dd8d48988d119951735',
  beer_store: '5370f356bcbc57f1066c94c2',
  beer_bar: '56aa371ce4b08b9a8d57356c'
}

const CATEGORY_ID = Object.keys(CATEGORIES).map((cat) => CATEGORIES[cat]);

// Return venues url from FourSquare.
export const getFsLocations = (mapCenter) => {

  const requestURL = `${API}/venues/search?ll=${mapCenter.lat},${mapCenter.lng}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=${VERSION}&categoryId=${CATEGORY_ID}&radius=${RADIUS}&limit=${SEARCH_RESULTS}`
  return fetch(requestURL)
    .then(response => {
      if (!response.ok) {
        throw response
      } else return response.json()
    })
    .then(data => {
      const places = data.response.venues;
      const filteredPlaces = places.filter(place => place.location.address && place.location.city && place.location.city === "Paris");

      return filteredPlaces;
    })
}

// Return an array of details about a venue. It uses id.
export const getFsDetails = (fsid) => {
  const FSID =  fsid;

  const requestURL = `${API}/venues/${FSID}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=${VERSION}`
  return  fetch(requestURL)
  .then(response => {
      if (!response.ok) {
        throw response
      } else  return response.json()
    })
}