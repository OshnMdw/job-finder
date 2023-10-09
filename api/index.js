const createServer = require("http").createServer;
const url = require("url");
const axios = require("axios");
const chalk = require("chalk");
const config = require("./config");

//define some HTTP Headers to control CORS( Cross-Origin Resource Sharing)
const headers = {     
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET",
};

// ?search=php&location=london => {search: 'php' , location: 'london'}
const decodeParams = (searchParams) =>
  Array.from(searchParams.keys()).reduce(
    (acc, key) => ({ ...acc, [key]: searchParams.get(key) }),
    {}
  );

// A callback function to handle each incoming HTTP request and outgoing HTTP response
const server = createServer((req, res) => {
  const requestURL = url.parse(req.url);
  // {search: 'php' , location: 'london'}
  const decodedParams = decodeParams(new URLSearchParams(requestURL.search));
  const { search, location, country = "gb" } = decodedParams;

  const targetURL = `${config.BASE_URL}/${country.toLowerCase()}/${
    config.BASE_PARAMS
  }&app_id=${config.APP_ID}&app_key=${
    config.API_KEY
  }&what=${search}&where=${location}`;

  if (req.method === "GET") {
    console.log(chalk.green(`Proxy GET request to : ${targetURL}`));
    axios
      .get(targetURL)
      .then((response) => {
        res.writeHead(200, headers);
        res.end(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(chalk.red(error));
        res.writeHead(500, headers);
        res.end(JSON.stringify(error));
      });
  }
});

server.listen(3000, () => {
  console.log(chalk.green("Server listening"));
});
