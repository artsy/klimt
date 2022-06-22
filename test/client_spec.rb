require "rspec"
require "./client/client.rb"

describe Client do

  let(:client) { Client.new }

  it 'should return unfiltered results' do
    expected = {"previousPage":nil,"nextPage":2,"ids":[1,2,3,4,5,6,7,8,9,10],"for_sale":[{"id":2,"dominant_colors":"yellow","availability":"for_sale","isPrimary":true},{"id":4,"dominant_colors":"brown","availability":"for_sale","isPrimary":false},{"id":6,"dominant_colors":"blue","availability":"for_sale","isPrimary":true},{"id":8,"dominant_colors":"green","availability":"for_sale","isPrimary":false},{"id":10,"dominant_colors":"red","availability":"for_sale","isPrimary":true}],"soldPrimaryCount":1};
    expect(client.retrieve).to eq expected
  end

end