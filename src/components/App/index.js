import React from 'react';
import photo from './photo.jpg';
import FileInput from '../FileInput';

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <div className="app-branding">ReactDuotone</div>
      </div>
      <div className="content">
        <div className="toolbar">
          <FileInput accept="image/*" placeholder="Drag &amp; drop a photo" />
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
