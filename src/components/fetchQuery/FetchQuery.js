import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const REQUEST = "?image_type=photo&orientation=horizontal&";
const API_KEY = "16045246-fdd78b83cbf5b45609c75787e";
const PARAMETERS = `&per_page=12&key=${API_KEY}`;

const fetchQuery = (query, page) =>
  axios.get(BASE_URL + REQUEST + `q=${query}` + PARAMETERS + `&page=${page}`);
  
export default fetchQuery;
