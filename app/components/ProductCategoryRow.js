var React = require('react');

function ProductCategoryRow(props) {
  return (
    <tr><th colSpan="2">{props.category}</th></tr>
  )
}

module.exports = ProductCategoryRow;
