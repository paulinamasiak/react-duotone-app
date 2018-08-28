import React, { Component } from 'react';
import photo from './photo.jpg';
import FileInput from '../FileInput';
import Card from '../Card';

class App extends Component {
  constructor(props) {
    super(props);

    this.fileReader = new FileReader();
    this.state = {
      imageSrc: photo,
    };

    this.handleFileChange = this.handleFileChange.bind(this);
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

  render() {
    const { imageSrc } = this.state;

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
            <section className="cards">
              <Card imageSrc={imageSrc} />
              <Card imageSrc={imageSrc} />
              <Card imageSrc={imageSrc} />
              <Card imageSrc={imageSrc} />
              <Card imageSrc={imageSrc} />
              <Card imageSrc={imageSrc} />
            </section>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
