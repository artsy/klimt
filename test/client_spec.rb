require "rspec"
require "./client/client.rb"

describe Client do

  let(:client) { Client.new }

  it 'should return unfiltered results' do
    expected = {
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
      "previousPage": nil,
      "nextPage": 2
    }
    
    expect(client.retrieve).to eq expected
  end


  describe 'should return results for' do
    it 'first page' do
      expected = {
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
        "previousPage": nil,
        "nextPage": 2
      }
      
      expect(client.retrieve({page: 1})).to eq expected
    end
    it 'third page' do
      expected = {
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

      expect(client.retrieve({page: 3})).to eq expected
    end
    it 'fifteenth page with dominant_colors' do
      expected = {
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
      
      expect(client.retrieve({page: 15, dominant_colors: ["red", "blue", "brown"]})).to eq expected
    end
    it 'thirty fourth page' do
      expected = {
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
      
      expect(client.retrieve({page: 34})).to eq expected
    end
    it 'last page' do
      expected = {
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
        "nextPage": nil
      }
      
      expect(client.retrieve({page: 50})).to eq expected
    end
  end

  it 'should return an empty set of results for pages after the last page' do
    expected = {
      "ids": [
    
      ],
      "for_sale": [
    
      ],
      "soldPrimaryCount": 0,
      "artistNames": [
    
      ],
      "previousPage": 50,
      "nextPage": nil
    }
    
    expect(client.retrieve({page: 51})).to eq expected
  end

  it 'should return results filtered by multiple dominant colors' do
    expected = {
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
      "previousPage": nil,
      "nextPage": 2
    }

    expect(client.retrieve({page: 1, dominant_colors: ['red', 'blue']})).to eq expected
  end

  it 'should return results filtered by a single dominant color' do
    expected = {
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
      "previousPage": nil,
      "nextPage": 2
    }
    
    expect(client.retrieve({dominant_colors: ["brown"]})).to eq expected
  end

  it 'should return empty results' do
    expected = {
      "ids": [
    
      ],
      "for_sale": [
    
      ],
      "soldPrimaryCount": 0,
      "artistNames": [
    
      ],
      "previousPage": nil,
      "nextPage": nil
    }
    
    expect(client.retrieve({dominant_colors: ["hotpink"]})).to eq expected
  end


end