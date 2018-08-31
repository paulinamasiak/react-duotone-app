import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { noop, take } from 'lodash';

class LazyList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: this.props.minCount,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, false);
  }

  handleScroll(event) {
    const { count } = this.state;
    const { items, step, threshold } = this.props;

    if (count >= items.lenght) {
      return;
    }

    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - threshold
    ) {
      this.setState((prevState) => ({
        count: prevState.count + step,
      }));
    }
  }

  render() {
    const { count } = this.state;
    const { items, itemRenderer } = this.props;

    return (
      <div className="row">{take(items, count).map(itemRenderer)}</div>
    );
  }
}

LazyList.propTypes = {
  items: PropTypes.array,
  itemRenderer: PropTypes.func,
  minCount: PropTypes.number,
  step: PropTypes.number,
  threshold: PropTypes.number,
};

LazyList.defaultProps = {
  items: [],
  itemRenderer: noop,
  minCount: 4,
  step: 4,
  threshold: 100,
};

export default LazyList;
