import React, { Component } from 'react';
import Card from '../Card';
import DuotoneImg from '../DuotoneImg';
import FileInput from '../FileInput';
import photo from './photo.jpg';

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
              <Card>
                <DuotoneImg
                  src={imageSrc}
                  lightTone="#453c45"
                  darkTone="#a147b1"
                />
              </Card>
              <Card>
                <DuotoneImg
                  src={imageSrc}
                  lightTone="#656565"
                  darkTone="#e3dc13"
                />
              </Card>
              <Card>
                <DuotoneImg
                  src={imageSrc}
                  lightTone="#2c2522"
                  darkTone="#117571"
                />
              </Card>
            </section>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
