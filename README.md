# Klimt

At Artsy, we often need to query REST endpoints and transform that data into another format needed by the client.

In this exercise, we provide a sample API with two endpoints and ask you to write some code to request data from
the API and transform the response. We provided tests and starter files in Javascript and Ruby, but feel free to use a language of your choice.

## Setup

### Javascript

**Requirements:** NodeJS >= 10, [yarn](https://yarnpkg.com/en/docs/install)

`yarn install` to install.

`ruby api/server.rb` to run the server, then `yarn test` to run the provided unit tests.

### Ruby

`bundle install` to install.

`ruby api/server.rb` to run the server, then `bundle exec rspec test/client_spec.rb` to run the provided unit tests.


### TODO
- [ ] Write test script to run server and test files


## Artworks API

You'll be provided with a `/artworks` API endpoint that returns a JSON array of items in the following format:

```json
[
  {
    "id": 1,
    "dominant_color": "brown",
    "availability": "sold",
    "artist_id": 3
  },
  {
    "id": 2,
    "dominant_color": "green",
    "availability": "for_sale",
    "artist_id": 1
  }
]
```

Each item returned from the `/artworks` endpoint will have the following:

- **id**: A unique integer
- **dominant_color**: One of `"red"`, `"brown"`, `"blue"`, `"yellow"`, or `"green"`
- **availability**: Either `"for_sale"` or `"sold"`

The `/artworks` endpoint accepts the following options, sent as query string parameters on the request URL:

- **limit**: The number of items to be returned
- **offset**: The index of the first item to be returned
- **dominant_color[]**: Which color to be included in the result set. May be included multiple times, once for each color. If omitted, all dominant_colors will be returned.

An example request URL might look like:

```
/artworks?limit=2&offset=0&dominant_color[]=brown&dominant_color[]=green
```

## Artist API

You'll also be provided with a `/artist` API endpoint that returns a JSON hash in the following format:

```json
{
  "id": 1,
  "name": "Gustav Klimt"
}
```

The hash returned from the `/artist` endpoint will have the following:

- **id**: A unique integer
- **name**: A string indicating the name of the artist

The `/artist` endpoint accepts the following options, sent as query string parameters on the request URL:

- **id**: Unique integer linked to an artist

An example request URL might look like:

```
/artist?id=3
```
## Task

In `client/client.js` or `client/client.rb`, write a function named `retrieve` that requests data from the `/artworks` endpoint, transforms the result into the format outlined below, and returns a promise that resolves with the transformed object. In addition to `retrieve`, you may add as many helper functions as you wish.

1. Get data from the `/artworks` endpoint. Process pages of 10 items at a time. Note that the `/artworks` endpoint may return more than 10 items per request.

2. The `retrieve` function accepts an `options` object and should support the following keys:

- **page** - Specifies which page to retrieve from the `/artworks` endpoint. If omitted, fetch page 1.
- **dominant_colors** - An array of dominant colors to retrieve from the `/artworks` endpoint. If omitted, fetch all dominant colors.

  As an example, to fetch the 2nd page of red and brown items from the API, `retrieve` might be called like this:

  ```
  retrieve({ page: 2, dominant_colors: ["red", "brown"] });
  ```

3. You can assume standard HTTP status codes on the response. If a request is unsuccessful, output a simple error message via `console.log()` or `puts` and recover.

4. Upon a successful API response, transform the fetched payload into an object containing the following keys:

- **ids**: An array containing the ids of all items returned from the request.
- **for_sale**: An array containing all of the items returned from the request that have a `availability` value of `"for_sale"`. Add a fourth key to each item called `isPrimary` indicating whether or not the item contains a primary color (red, blue, or yellow).
- **soldPrimaryCount**: The total number of items returned from the request that have a `availability` value of `"sold"` and contain a primary color.
- **artistNames**: An array containing all the artists associated with the items returned from the request sorted alphabetically by full name.
- **previousPage**: The page number for the previous page of results, or `null` if this is the first page.
- **nextPage**: The page number for the next page of results, or `null` if this is the last page.

5. For the Javascript exercise, return a promise from `retrieve` that resolves with the transformed data. For the Ruby exercise, return a Hash with the transformed data.

## Additional requirements

- Use the provided URI library to construct the request URL. Refer to https://medialize.github.io/URI.js/ for documentation.
- For the Javascript option, you should use the Axios API to interact with the `artworks` endpoint. Refer to https://axios-http.com/docs/intro for documentation.
- For the Ruby option, you should use the REST Client library to interact with the `artworks` endpoint. Refer to https://rubydoc.info/github/rest-client/rest-client/master for documentation.
- Don't add any additional libraries or edit any files other than `client/client.js` or `client/client.rb`
- We've provided a suite of unit tests. Your solution should pass all tests.

# Credit

This has been generously inspired by the exercise from [Ad Hoc](https://www.adhoc.team)
