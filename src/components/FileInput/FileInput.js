import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { noop } from 'lodash';
import { isAcceptedFile } from './helpers';

class FileInput extends Component {
  constructor(props) {
    super(props);

    this.file = null;
    this.state = {
      isDragOver: false,
    };

    this.handleDragEnter = this.handleDragEnter.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDragLeave = this.handleDragLeave.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleDragEnter() {
    this.setState({
      isDragOver: true,
    });
  }

  handleDragOver(event) {
    event.preventDefault();
  }

  handleDragLeave() {
    this.setState({
      isDragOver: false,
    });
  }

  handleDrop(event) {
    event.preventDefault();

    const file = event.dataTransfer.files[0];
    const { accept } = this.props;

    if (isAcceptedFile(file, accept)) {
      this.file = file;
      this.props.onChange(this.file);
    }

    this.setState({
      isDragOver: false,
    });
  }

  handleChange(event) {
    this.file = event.target.files[0];
    this.props.onChange(this.file);
  }

  render() {
    const className = classNames('file-input', {
      'is-dragover': this.state.isDragOver,
    });

    return (
      <label
        className={className}
        onDragEnter={this.handleDragEnter}
        onDragOver={this.handleDragOver}
        onDragLeave={this.handleDragLeave}
        onDrop={this.handleDrop}
      >
        <input
          type="file"
          accept={this.props.accept}
          onChange={this.handleChange}
        />
        <span className="file-input-dnd">{this.props.placeholder}</span>
        <i className="fas fa-plus" />
      </label>
    );
  }
}

FileInput.propTypes = {
  accept: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

FileInput.defaultProps = {
  accept: '',
  name: '',
  placeholder: '',
  onChange: noop,
};

export default FileInput;
