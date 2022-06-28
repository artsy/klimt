const axios = require('axios')
const { retrieve } = require('./client')

describe('basic', () => {
  it('pings', async () => {
    const response = await axios.get('/ping')
    expect(response).toEqual('pong')
  })
})

describe("client", () => {
  it('should return unfiltered results', async () => {
    var expected = {
      "ids": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ],
      "for_sale": [
        {
          "id": 2,
          "dominant_color": "yellow",
          "availability": "for_sale",
          "artist_id": 1,
          "isPrimary": true
        },
        {
          "id": 4,
          "dominant_color": "brown",
          "availability": "for_sale",
          "artist_id": 6
        },
        {
          "id": 6,
          "dominant_color": "blue",
          "availability": "for_sale",
          "artist_id": 6,
          "isPrimary": true
        },
        {
          "id": 8,
          "dominant_color": "green",
          "availability": "for_sale",
          "artist_id": 9
        },
        {
          "id": 10,
          "dominant_color": "red",
          "availability": "for_sale",
          "artist_id": 7,
          "isPrimary": true
        }
      ],
      "soldPrimaryCount": 1,
      "artistNames": [
        "Gustav Klimt",
        "Hilma af Klint",
        "Julie Mehretu",
        "Kara Walker",
        "Kehinde Wiley",
        "Robert Motherwell",
        "Tammy Nyugen",
        "Tschabalala Self"
      ],
      "previousPage": null,
      "nextPage": 2
    }
    
    const response = await retrieve();
    expect(response).toEqual(expected);
  });

  describe('should return results for', () => {
    it('first page', async () => {
      var expected = {
        "ids": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10
        ],
        "for_sale": [
          {
            "id": 2,
            "dominant_color": "yellow",
            "availability": "for_sale",
            "artist_id": 1,
            "isPrimary": true
          },
          {
            "id": 4,
            "dominant_color": "brown",
            "availability": "for_sale",
            "artist_id": 6
          },
          {
            "id": 6,
            "dominant_color": "blue",
            "availability": "for_sale",
            "artist_id": 6,
            "isPrimary": true
          },
          {
            "id": 8,
            "dominant_color": "green",
            "availability": "for_sale",
            "artist_id": 9
          },
          {
            "id": 10,
            "dominant_color": "red",
            "availability": "for_sale",
            "artist_id": 7,
            "isPrimary": true
          }
        ],
        "soldPrimaryCount": 1,
        "artistNames": [
          "Gustav Klimt",
          "Hilma af Klint",
          "Julie Mehretu",
          "Kara Walker",
          "Kehinde Wiley",
          "Robert Motherwell",
          "Tammy Nyugen",
          "Tschabalala Self"
        ],
        "previousPage": null,
        "nextPage": 2
      }
      
      const response = await retrieve({page: 1});
      expect(response).toEqual(expected);
    });

    it('third page', async () => {
      var expected = {
        "ids": [
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30
        ],
        "for_sale": [
          {
            "id": 23,
            "dominant_color": "red",
            "availability": "for_sale",
            "artist_id": 9,
            "isPrimary": true
          },
          {
            "id": 24,
            "dominant_color": "red",
            "availability": "for_sale",
            "artist_id": 4,
            "isPrimary": true
          },
          {
            "id": 25,
            "dominant_color": "red",
            "availability": "for_sale",
            "artist_id": 1,
            "isPrimary": true
          },
          {
            "id": 28,
            "dominant_color": "blue",
            "availability": "for_sale",
            "artist_id": 7,
            "isPrimary": true
          }
        ],
        "soldPrimaryCount": 3,
        "artistNames": [
          "Fan Ho",
          "Gustav Klimt",
          "Hilma af Klint",
          "Julie Mehretu",
          "Kehinde Wiley",
          "Robert Motherwell",
          "Tschabalala Self"
        ],
        "previousPage": 2,
        "nextPage": 4
      }

      const response = await retrieve({page: 3});
      expect(response).toEqual(expected);
    });

    it('fifteenth page with dominant colors', async () => {
      var expected = {
        "ids": [
          236,
          237,
          238,
          240,
          241,
          243,
          246,
          251,
          252,
          256
        ],
        "for_sale": [
          {
            "id": 240,
            "dominant_color": "blue",
            "availability": "for_sale",
            "artist_id": 9,
            "isPrimary": true
          },
          {
            "id": 241,
            "dominant_color": "red",
            "availability": "for_sale",
            "artist_id": 9,
            "isPrimary": true
          },
          {
            "id": 243,
            "dominant_color": "blue",
            "availability": "for_sale",
            "artist_id": 7,
            "isPrimary": true
          },
          {
            "id": 251,
            "dominant_color": "blue",
            "availability": "for_sale",
            "artist_id": 1,
            "isPrimary": true
          },
          {
            "id": 252,
            "dominant_color": "blue",
            "availability": "for_sale",
            "artist_id": 5,
            "isPrimary": true
          },
          {
            "id": 256,
            "dominant_color": "red",
            "availability": "for_sale",
            "artist_id": 9,
            "isPrimary": true
          }
        ],
        "soldPrimaryCount": 4,
        "artistNames": [
          "Fan Ho",
          "Gustav Klimt",
          "Hilma af Klint",
          "Julie Mehretu",
          "Kara Walker",
          "Kehinde Wiley",
          "Robert Motherwell"
        ],
        "previousPage": 14,
        "nextPage": 16
      }

      const response = await retrieve({page: 15, dominant_color: ["red", "blue", "brown"]});
      expect(response).toEqual(expected);
    });

    it('thirty fourth page', async () => {
      var expected = {
        "ids": [
          331,
          332,
          333,
          334,
          335,
          336,
          337,
          338,
          339,
          340
        ],
        "for_sale": [
          {
            "id": 332,
            "dominant_color": "brown",
            "availability": "for_sale",
            "artist_id": 4
          },
          {
            "id": 334,
            "dominant_color": "green",
            "availability": "for_sale",
            "artist_id": 4
          },
          {
            "id": 336,
            "dominant_color": "blue",
            "availability": "for_sale",
            "artist_id": 5,
            "isPrimary": true
          },
          {
            "id": 337,
            "dominant_color": "green",
            "availability": "for_sale",
            "artist_id": 8
          },
          {
            "id": 339,
            "dominant_color": "green",
            "availability": "for_sale",
            "artist_id": 4
          },
          {
            "id": 340,
            "dominant_color": "red",
            "availability": "for_sale",
            "artist_id": 2,
            "isPrimary": true
          }
        ],
        "soldPrimaryCount": 2,
        "artistNames": [
          "Fan Ho",
          "Hilma af Klint",
          "Julie Mehretu",
          "Robert Motherwell",
          "Tammy Nyugen"
        ],
        "previousPage": 33,
        "nextPage": 35
      }

      const response = await retrieve({page: 34});
      expect(response).toEqual(expected);
    });

    it('last page', async () => {
      var expected = {
        "ids": [
          491,
          492,
          493,
          494,
          495,
          496,
          497,
          498,
          499,
          500
        ],
        "for_sale": [
          {
            "id": 491,
            "dominant_color": "red",
            "availability": "for_sale",
            "artist_id": 8,
            "isPrimary": true
          }
        ],
        "soldPrimaryCount": 6,
        "artistNames": [
          "Gustav Klimt",
          "Julie Mehretu",
          "Kara Walker",
          "Robert Motherwell",
          "Tammy Nyugen"
        ],
        "previousPage": 49,
        "nextPage": null
      }

      const response = await retrieve({page: 50});
      expect(response).toEqual(expected);
    });
  });

  it('should return an empty set of results for pages after the last page', (done) => {
    var expected = {
      "ids": [
    
      ],
      "for_sale": [
    
      ],
      "soldPrimaryCount": 0,
      "artistNames": [
    
      ],
      "previousPage": 50,
      "nextPage": null
    }
    
    const response = await retrieve({page: 51});
    expect(response).toEqual(expected);
  });

  it('should return results filtered by multiple dominant colors', (done) => {
    var expected = {
      "ids": [
        5,
        6,
        10,
        11,
        15,
        16,
        17,
        22,
        23,
        24
      ],
      "for_sale": [
        {
          "id": 6,
          "dominant_color": "blue",
          "availability": "for_sale",
          "artist_id": 6,
          "isPrimary": true
        },
        {
          "id": 10,
          "dominant_color": "red",
          "availability": "for_sale",
          "artist_id": 7,
          "isPrimary": true
        },
        {
          "id": 23,
          "dominant_color": "red",
          "availability": "for_sale",
          "artist_id": 9,
          "isPrimary": true
        },
        {
          "id": 24,
          "dominant_color": "red",
          "availability": "for_sale",
          "artist_id": 4,
          "isPrimary": true
        }
      ],
      "soldPrimaryCount": 6,
      "artistNames": [
        "Fan Ho",
        "Gustav Klimt",
        "Julie Mehretu",
        "Kara Walker",
        "Kehinde Wiley",
        "Tammy Nyugen",
        "Tschabalala Self"
      ],
      "previousPage": null,
      "nextPage": 2
    }

    const response = await retrieve({page: 1, dominant_color: ['red', 'blue']});
    expect(response).toEqual(expected);
  });

  it('should return results filtered by a single dominant color', async () => {
    var expected = {
      "ids": [
        1,
        3,
        4,
        9,
        20,
        27,
        29,
        41,
        42,
        55
      ],
      "for_sale": [
        {
          "id": 4,
          "dominant_color": "brown",
          "availability": "for_sale",
          "artist_id": 6
        },
        {
          "id": 41,
          "dominant_color": "brown",
          "availability": "for_sale",
          "artist_id": 4
        },
        {
          "id": 55,
          "dominant_color": "brown",
          "availability": "for_sale",
          "artist_id": 2
        }
      ],
      "soldPrimaryCount": 0,
      "artistNames": [
        "Fan Ho",
        "Gustav Klimt",
        "Hilma af Klint",
        "Kara Walker",
        "Robert Motherwell",
        "Tschabalala Self"
      ],
      "previousPage": null,
      "nextPage": 2
    }
    
    const response = await retrieve({dominant_color: ["brown"]});
    expect(response).toEqual(expected);
  });

  it('should return empty results', async () => {
    var expected = {
      "ids": [
    
      ],
      "for_sale": [
    
      ],
      "soldPrimaryCount": 0,
      "artistNames": [
    
      ],
      "previousPage": null,
      "nextPage": null
    }

    const response = await retrieve({dominant_color: ["hotpink"]});
    expect(response).toEqual(expected);
  });

})
