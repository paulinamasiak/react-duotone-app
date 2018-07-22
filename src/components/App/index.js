import React from 'react';
import photo from './photo.jpg';
import FileInput from '../FileInput';
import Card from '../Card';

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
            <Card imageSrc={photo} />
            <Card imageSrc={photo} />
            <Card imageSrc={photo} />
            <Card imageSrc={photo} />
            <Card imageSrc={photo} />
            <Card imageSrc={photo} />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
