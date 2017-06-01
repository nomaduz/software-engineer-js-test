// NOTE: you can use CommonJS here, for instance:
// var foo = require("npm-dependency");
// var bar = require("./path/to/local/file_without_extension");
// module.exports = someVariable;

// all our components are singleton. On load they already grab html node that they need
// so we don't have to do anything expect importing them here
let buttonClicker = require('./components/buttonClicker');
let messageDisplay = require('./components/messageDisplay');
let messageWriter = require('./components/messageWriter');
let errorHandler = require('./components/errorHandler');

console.log( "Test application ready" );
