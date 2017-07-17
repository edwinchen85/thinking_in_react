var React = require('react');
var ProductCategoryRow = require('./ProductCategoryRow');
var ProductRow = require('./ProductRow');

function ProductTable(props) {
  var rows = [];
  var lastCategory = null;
  props.products.forEach((product) => {
    if (product.name.indexOf(props.filterText) === -1 || (!product.stocked && props.inStockOnly)) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

module.exports = ProductTable;
