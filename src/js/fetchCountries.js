const API_URL = 'https://restcountries.eu/rest/v2/';
export default function (searchQuery) {
  return fetch(`${API_URL}name/${searchQuery}`)
    .then(response => {
      console.log(response);
      return response.json();
    })

    .catch(error => {
      console.log('maim' + error);
      return error;
    });
}
