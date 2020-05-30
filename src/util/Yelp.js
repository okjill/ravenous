const apiKey = 'yljl1NZGHwv1-ECU5JaW2SDt2y5BihodKKXChrVC9rjJRi42owku8luvMeOKfD3IfcumDJ7y895uOfdUs0p92RUpG23XiRlh9K2eMKEi1SJEJsuU-fzcoMbO8cavXnYx';

const Yelp = {
  search: async function(term, location, sortBy) {
    const endpoint = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
    const headers = {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }
    return await fetch(endpoint, headers).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => business);
      }
    });
  }
};

export default Yelp;
