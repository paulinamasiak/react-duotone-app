import React, { Component } from 'react';
import Card from '../Card';
import DuotoneImg from '../DuotoneImg';
import FileInput from '../FileInput';
import LazyList from '../LazyList';
import duotones from '../../data/duotones.json';
import photo from './photo.jpg';

class App extends Component {
  constructor(props) {
    super(props);

    this.fileReader = new FileReader();
    this.state = {
      imageSrc: photo,
    };

    this.handleFileChange = this.handleFileChange.bind(this);
    this.renderListItem = this.renderListItem.bind(this);
  }

  componentDidMount() {
    this.fileReader.onload = (file) => {
      this.setState({
        imageSrc: file.target.result,
      });
    };
  }

  handleFileChange(file) {
    if (file) {
      this.fileReader.readAsDataURL(file);
    }
  }

  renderListItem(item) {
    const { imageSrc } = this.state;

    return (
      <div className="col-sm-12 col-md-6" key={item.name}>
        <Card>
          <DuotoneImg
            src={imageSrc}
            {...item}
          />
        </Card>
      </div>
    );
  }

  render() {
    return (
      <div className="app">
        <div className="navbar">
          <div className="app-branding">ReactDuotone</div>
        </div>
        <div className="content">
          <div className="toolbar">
            <FileInput
              accept="image/*"
              placeholder="Drag &amp; drop a photo"
              onChange={this.handleFileChange}
            />
          </div>
          <main className="main-area">
            <LazyList
              items={duotones}
              itemRenderer={this.renderListItem}
            />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
