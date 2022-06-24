const axios = require('axios')
const { retrieve } = require('./client')

describe('basic', (done) => {
	it('pings', () => {
		axios
			.get('/ping')
			.then(function (output) {
				expect(output).toEqual('pong')
			})
			.then(done)
	})
})

  it('should return unfiltered results', (done) => {
    var expected = {"previousPage":null,"nextPage":2,"ids":[1,2,3,4,5,6,7,8,9,10],"for_sale":[{"id":2,"dominant_colors":"yellow","availability":"for_sale","isPrimary":true},{"id":4,"dominant_colors":"brown","availability":"for_sale","isPrimary":false},{"id":6,"dominant_colors":"blue","availability":"for_sale","isPrimary":true},{"id":8,"dominant_colors":"green","availability":"for_sale","isPrimary":false},{"id":10,"dominant_colors":"red","availability":"for_sale","isPrimary":true}],"soldPrimaryCount":1};
    retrieve().then(function(output){
      expect(output).toEqual(expected);
    }).then(done);
  });

  describe('should return results for', () => {
    it('first page', (done) => {
      var expected = {"previousPage":null,"nextPage":2,"ids":[1,2,3,4,5,6,7,8,9,10],"for_sale":[{"id":2,"dominant_colors":"yellow","availability":"for_sale","isPrimary":true},{"id":4,"dominant_colors":"brown","availability":"for_sale","isPrimary":false},{"id":6,"dominant_colors":"blue","availability":"for_sale","isPrimary":true},{"id":8,"dominant_colors":"green","availability":"for_sale","isPrimary":false},{"id":10,"dominant_colors":"red","availability":"for_sale","isPrimary":true}],"soldPrimaryCount":1};
      retrieve({page: 1}).then(function(output){
        expect(output).toEqual(expected);
      }).then(done);
    });
    it('third page', (done) => {
      var expected = {"previousPage":2,"nextPage":4,"ids":[21,22,23,24,25,26,27,28,29,30],"for_sale":[{"id":23,"dominant_colors":"red","availability":"for_sale","isPrimary":true},{"id":24,"dominant_colors":"red","availability":"for_sale","isPrimary":true},{"id":25,"dominant_colors":"red","availability":"for_sale","isPrimary":true},{"id":28,"dominant_colors":"blue","availability":"for_sale","isPrimary":true}],"soldPrimaryCount":3};
      retrieve({page: 3}).then((output) => {
        expect(output).toEqual(expected);
      }).then(done);
    });
    it('fifteenth page with dominant colors', (done) => {
      var expected = {"previousPage":14,"nextPage":16,"ids":[236,237,238,240,241,243,246,251,252,256],"for_sale":[{"id":240,"dominant_colors":"blue","availability":"for_sale","isPrimary":true},{"id":241,"dominant_colors":"red","availability":"for_sale","isPrimary":true},{"id":243,"dominant_colors":"blue","availability":"for_sale","isPrimary":true},{"id":251,"dominant_colors":"blue","availability":"for_sale","isPrimary":true},{"id":252,"dominant_colors":"blue","availability":"for_sale","isPrimary":true},{"id":256,"dominant_colors":"red","availability":"for_sale","isPrimary":true}],"soldPrimaryCount":4};
      retrieve({page: 15, dominant_colors: ["red", "blue", "brown"]}).then((output) => {
        expect(output).toEqual(expected);
      }).then(done);
    });
    it('thirty fourth page', (done) => {
      var expected = {"previousPage":33,"nextPage":35,"ids":[331,332,333,334,335,336,337,338,339,340],"for_sale":[{"id":332,"dominant_colors":"brown","availability":"for_sale","isPrimary":false},{"id":334,"dominant_colors":"green","availability":"for_sale","isPrimary":false},{"id":336,"dominant_colors":"blue","availability":"for_sale","isPrimary":true},{"id":337,"dominant_colors":"green","availability":"for_sale","isPrimary":false},{"id":339,"dominant_colors":"green","availability":"for_sale","isPrimary":false},{"id":340,"dominant_colors":"red","availability":"for_sale","isPrimary":true}],"soldPrimaryCount":2};
      retrieve({page: 34}).then((output) => {
        expect(output).toEqual(expected);
      }).then(done);
    });
    it('last page', (done) => {
      var expected = {"previousPage":49,"nextPage":null,"ids":[491,492,493,494,495,496,497,498,499,500],"for_sale":[{"id":491,"dominant_colors":"red","availability":"for_sale","isPrimary":true}],"soldPrimaryCount":6};
      retrieve({page: 50}).then((output) => {
        expect(output).toEqual(expected);
      }).then(done);
    });
  });

  it('should return an empty set of results for pages after the last page', (done) => {
    var expected = {"previousPage":50,"nextPage":null,"ids":[],"for_sale":[],"soldPrimaryCount":0};
    retrieve({page: 51}).then((output) => {
      expect(output).toEqual(expected);
    }).then(done);
  });

  it('should return results filtered by multiple dominant colors', (done) => {
    var expected = {"previousPage":null,"nextPage":2,"ids":[5,6,10,11,15,16,17,22,23,24],"for_sale":[{"id":6,"dominant_colors":"blue","availability":"for_sale","isPrimary":true},{"id":10,"dominant_colors":"red","availability":"for_sale","isPrimary":true},{"id":23,"dominant_colors":"red","availability":"for_sale","isPrimary":true},{"id":24,"dominant_colors":"red","availability":"for_sale","isPrimary":true}],"soldPrimaryCount":6};
    retrieve({page: 1, dominant_colors: ['red', 'blue']}).then((output) => {
      expect(output).toEqual(expected);
    }).then(done);
  });

  it('should return results filtered by a single dominant color', (done) => {
    var expected = {"previousPage":null,"nextPage":2,"ids":[1,3,4,9,20,27,29,41,42,55],"for_sale":[{"id":4,"dominant_colors":"brown","availability":"for_sale","isPrimary":false},{"id":41,"dominant_colors":"brown","availability":"for_sale","isPrimary":false},{"id":55,"dominant_colors":"brown","availability":"for_sale","isPrimary":false}],"soldPrimaryCount":0};
    retrieve({dominant_colors: ["brown"]}).then((output) => {
      expect(output).toEqual(expected);
    }).then(done);
  });

  it('should return empty results', (done) => {
    var expected = {"previousPage":null,"nextPage":null,"ids":[],"for_sale":[],"soldPrimaryCount":0};
    retrieve({dominant_colors: ["hotpink"]}).then((output) => {
      expect(output).toEqual(expected);
    }).then(done);
  });

})