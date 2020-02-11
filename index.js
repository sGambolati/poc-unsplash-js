const fetch = require('node-fetch');
global.fetch = fetch;

const Unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson;

const unsplash = new Unsplash({ accessKey: "{YOUR-API-KEY}" });

console.log("About to search photos.");

unsplash.search.photos("dogs", 1, 100, { orientation: "portrait" })
  .then(toJson)
  .then(json => {
    
    // Only interested on regular and thumbnail image's size.
    const results = json.results.map(item => {
        return {
            url: item.urls.regular,
            thumb: item.urls.thumb,
        }
    });

    console.log("Result", results);
  });