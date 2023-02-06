import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge, Table } from "reactstrap";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
class productList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }
  render() {
    return (
      <h3>
        <Badge color="warning">Products</Badge>
        <Badge color="success">{this.props.currentCatgory.categoryName}</Badge>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit</th>
              <th>Unit Stock</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.unitPrice}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitInStock}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </h3>
    );
  }
}
function mapStateToProps(state) {
  return {
    currentCatgory: state.changeCurrentCategoryReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(productList);
