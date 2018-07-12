import React from 'react';
import photo from './photo.jpg';

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <div className="app-branding">
          ReactDuotone
        </div>
      </div>
      <div className="content">
        <div className="toolbar">
          <label htmlFor="photo" className="file-input">
            <input id="photo" type="file" />
            <span className="file-input-dnd">
              Drag &amp; drop a photo
            </span>
            <i className="fas fa-plus" />
          </label>
        </div>
        <main className="main-area">
          <section className="cards">
            <div className="card">
              <picture className="thumbnail">
                <img src={photo} alt="" />
              </picture>
            </div>
            <div className="card">
              <picture className="thumbnail">
                <img src={photo} alt="" />
              </picture>
            </div>
            <div className="card">
              <picture className="thumbnail">
                <img src={photo} alt="" />
              </picture>
            </div>
            <div className="card">
              <picture className="thumbnail">
                <img src={photo} alt="" />
              </picture>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
