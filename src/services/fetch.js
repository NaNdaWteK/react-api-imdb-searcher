const API_KEY = '60bf1089';

export default (param, query) => {
  return fetch(`http://www.omdbapi.com/?${query}=${param}&apikey=${API_KEY}`)
    .then(response => response.json())
}
