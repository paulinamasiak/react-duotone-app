import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { noop, take, throttle } from 'lodash';

const SCROLL_WAIT = 16;

class LazyList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: this.props.minCount,
    };

    this.handleScroll = throttle(this.handleScroll.bind(this), SCROLL_WAIT);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, false);
  }

  handleScroll() {
    const { count } = this.state;
    const { items, step, threshold } = this.props;

    if (items.length <= count) {
      return;
    }

    if (
      document.body.offsetHeight - threshold <=
      window.innerHeight + window.scrollY
    ) {
      this.setState((prevState) => ({
        count: prevState.count + step,
      }));
    }
  }

  render() {
    const { count } = this.state;
    const { className, items, itemRenderer } = this.props;

    return (
      <div className={'row ' + className }>{take(items, count).map(itemRenderer)}</div>
    );
  }
}

LazyList.propTypes = {
  className: PropTypes.string,
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
