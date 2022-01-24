const querystring = require('querystring');
const url = 'https://www.example.com/p/a/t/h?course=node&lesson=http';

//isolating the query string from the url variable
const queryToParse = url.split('?')[1];

//parsing isolated query string into an object/key pairs
const parsedQuery = querystring.parse(queryToParse);

//adding extra property to the parsedQuery object
parsedQuery.exercise = 'querystring';

//converting paredQuery object back into encoded query string
const modifiedQueryString = querystring.stringify(parsedQuery);
//console.log(modifiedQueryString);
