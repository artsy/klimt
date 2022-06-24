const axios = require('axios')

// /artworks endpoint
const artworks_url = 'http://localhost:4567/artworks'
const artist_url = 'http://localhost:4567/artist'

const isPrimary = (color) => ['yellow', 'red', 'blue'].includes(color)

const formatForSaleData = (forSaleData) => {
	const { id, dominant_color, availability } = forSaleData
	return {
		id,
		availability,
		dominant_colors: dominant_color,
		isPrimary: isPrimary(dominant_color),
	}
}

const formatData = (data, options) => {
	// console.log(JSON.stringify(data, null, 2))

	return {
		previousPage: options.page - 1 === 0 ? null : options.page - 1,
		nextPage: data.length < 10 ? null : options.page + 1,
		ids: data.map((item) => item.id),
		for_sale: data
			.filter((item) => item.availability === 'for_sale')
			.map((item) => formatForSaleData(item)),
		soldPrimaryCount: data.filter(
			(item) => item.availability === 'sold' && isPrimary(item.dominant_color),
		).length,
	}
}

const PAGE_SIZE = 10

// Your retrieve function plus any additional functions go here ...
const retrieve = (explicitOptions) => {
	const options = { ...{ page: 1, dominant_colors: [] }, ...explicitOptions }
	const { page, dominant_colors } = options

	return new Promise((res, rej) => {
		axios
			.get(artworks_url, {
				params: {
					offset: (page - 1) * PAGE_SIZE,
					limit: PAGE_SIZE,
          dominant_colors,
				},
			})
			.then(function (response) {
				// console.log(JSON.stringify(response.data, null, 2))
				const formattedData = formatData(response.data, options)
				// console.log(JSON.stringify(formattedData, null, 2))
				res(formattedData)
			})
			.catch(function (error) {
				console.error(error)
				rej(error)
			})
	})
}

module.exports = {
	retrieve,
}
