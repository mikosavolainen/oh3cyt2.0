import React from 'react';

const Gallery = ({ gallery, language }) => {
  return (
    <section id="galleria">
      <h2 id="site-gallery">{gallery[language]}</h2>
      <div className="row">
        <div className="col-md-4">
          <img src="photos/kuva1.jpg" alt="Kuva 1" style={{ width: '100%' }} />
        </div>
        <br />
        <div className="col-md-4">
          <img src="photos/kuva1.jpg" alt="Kuva 2" style={{ width: '100%' }} />
        </div>
        {/* Lisää tarvittaessa lisää kuvia */}
      </div>
    </section>
  );
};

export default Gallery;
