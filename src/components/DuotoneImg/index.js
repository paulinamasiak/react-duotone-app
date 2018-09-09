import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { noop } from 'lodash';
import { duotone } from './filters';

class DuotoneImg extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
    };

    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.loadImage();
  }

  componentDidUpdate(prevProps) {
    this.loadImage();
  }

  loadImage() {
    const { darkTone, lightTone, src } = this.props;
    const img = new Image();

    img.onload = () => {
      const context = this.canvasRef.current.getContext('2d');

      context.canvas.width = img.width;
      context.canvas.height = img.height;

      context.drawImage(img, 0, 0);
      context.putImageData(duotone(this.getPixels(), lightTone, darkTone), 0, 0);

      this.setState({
        loaded: true,
      }, this.props.onLoad);
    }

    img.src = src;
  }

  getPixels() {
    const canvas = this.canvasRef.current;
    const context = canvas.getContext('2d');

    return context.getImageData(0, 0, canvas.width, canvas.height);
  }

  render() {
    const className = classNames('duotone-img', {
      'fade-in': this.state.loaded,
    });

    return (
      <canvas className={className} ref={this.canvasRef} />
    );
  }
}

DuotoneImg.propTypes = {
  darkTone: PropTypes.string,
  lightTone: PropTypes.string,
  src: PropTypes.string,
  onLoad: PropTypes.func,
};

DuotoneImg.defaultProps = {
  darkTone: '#ffffff',
  lightTone: '#000000',
  src: '',
  onLoad: noop,
};

export default DuotoneImg;
