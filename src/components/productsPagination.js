import { Pagination } from 'react-bootstrap';
import React, { Component, PropTypes } from 'react';

class ProductsPagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: this.props.page,
    };
  }

  handleSelect(event, selectedEvent) {
    this.props.changePage(selectedEvent.eventKey);
  }

  render() {
    const products = this.props.products;

    return (
      <Pagination
        prev
        next
        first
        last
        ellipsis
        items={Math.ceil(products.length/20 + 10)}
        maxButtons={5}
        activePage={this.props.page}
        onSelect={::this.handleSelect} />
    );
  }
};

ProductsPagination.propTypes = {
  page: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
};

export default ProductsPagination;
