import React from 'react';
import logo from './logo.svg';
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
          <label className="file-input">
            <input type="file" />
            <span className="file-input-dnd">
              Drag &amp; drop a photo
            </span>
            <i class="fas fa-plus"></i>
          </label>
        </div>
        <main className="main-area">
          <section className="cards">
            <div className="card">
              <picture className="thumbnail">
                <img src={photo} />
              </picture>
            </div>
            <div className="card">
              <picture className="thumbnail">
                <img src={photo} />
              </picture>
            </div>
            <div className="card">
              <picture className="thumbnail">
                <img src={photo} />
              </picture>
            </div>
            <div className="card">
              <picture className="thumbnail">
                <img src={photo} />
              </picture>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
