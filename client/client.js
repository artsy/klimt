const axios = require("axios");

// /artworks endpoint
const artworks_url = "http://localhost:4567/artworks";
const artist_url = "http://localhost:4567/artist";

const formatForSaleData = (forSaleData) => {
  
}

const formatData = (data) => {
  return {
    soldPrimaryCount: 1,
    nextPage: 2,
    previousPage: null,
    ids: data.map((item) => item.id),
    for_sale: data.map((item) => item),
  };
};

// Your retrieve function plus any additional functions go here ...
const retrieve = () => {
  return new Promise((res, rej) => {
    axios
      .get(artworks_url, {
        params: {
          limit: 10,
        },
      })
      .then(function (response) {
        const formattedData = formatData(response.data);
        res(formattedData);
      })
      .catch(function (error) {
        rej(error);
      });
  });
};

module.exports = {
  retrieve,
};
