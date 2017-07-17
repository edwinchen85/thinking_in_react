var React = require('react');

function ProductRow(props) {
  var name = props.product.stocked ?
  props.product.name :
  <span style={{color: 'red'}}>
    {props.product.name}
  </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{props.product.price}</td>
    </tr>
  )
}

module.exports = ProductRow;
