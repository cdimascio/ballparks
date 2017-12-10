# ballparks

Ballparks provides up to date weather information for all Major League Ballparks. It utilizes DBpedia, IBM Weather Company's Weather Insights, and Bluemix.

### Prerequisites
- Create an IBM Insight's for Weather service on Bluemix

### Build

- `npm install`
- `node_modules/.bin/webpack`

### Run

To run locally:

- Copy theservice url from your IBM Insights for Weather service instance 
  e.g. https://[user]:[pass]@twcservice.mybluemix.net`
- `export WEATHER_API_ROOT=https://[user]:[pass]@twcservice.mybluemix.net`
- `node index`
- Go to http://localhost:3000

### Deploy to Bluemix
- Create an IBM Insight's for Weather service on Bluemix
- From the project root, run `cf push [user]-ballparks`
- Go to http://[user]-ballparks.mybluemix.net