var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
var FilterableProductTable = require('./components/FilterableProductTable');

ReactDOM.render(<FilterableProductTable />, document.getElementById('container'));
