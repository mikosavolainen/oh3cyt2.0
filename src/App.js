import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SolarTerrestrialContainer from './components/SolarTerrestrialContainer';
import Gallery from './components/Gallery';
import Logbook from './components/Logbook';
import CookiePopup from './components/CookiePopup';
import AnalyticsAds from './components/AnalyticsAds';


const App = () => {
  const titles = {
    'fi': 'OH3CYT',
    'en': 'OH3CYT'
  };

  const gallery = {
    'fi': 'GALLERIA',
    'en': 'GALLERY'
  };

  const laitteistoContent = {
    'fi': (
      <div>
        <h2>Radio Laitteisto</h2>
        <hr />
        <h3>Käsilaitteet:</h3>
        <ul>
          <li>Baofeng BF-F8+</li>
          <li>Baofeng UV-5RA+</li>
          <li>Quansheng UV-K5</li>
        </ul>
        <h2>Mobiili:</h2>
        <ul>
          <li>Anytone at-778uv</li>
        </ul>
        <h2>Antennit:</h2>
        <ul>
          <li>Nagoya NA-771 UHF/VHF</li>
          <li>Hamking SG-7900 UHF/VHF</li>
          <li>ABBREE Taktinen käsiradio antenni UHF/VHF</li>
          <li>30m pitkä "Random wire" antenni 9:1 Balun</li>
        </ul>
        <h2>Muut</h2>
        <ul>
          <li>RTL-SDR v3</li>
          <li>RTL-SDR v4(Hajonnut)</li>
        </ul>
      </div>
    ),
    'en': (
      <div>
        <h2>Radio Equipment</h2>
        <hr />
        <h3>Handheld Devices:</h3>
        <ul>
          <li>Baofeng BF-F8+</li>
          <li>Baofeng UV-5RA+</li>
          <li>Quansheng UV-K5</li>
        </ul>
        <h2>Mobile:</h2>
        <ul>
          <li>Anytone at-778uv</li>
        </ul>
        <h2>Antennas:</h2>
        <ul>
          <li>Nagoya NA-771 UHF/VHF</li>
          <li>Hamking SG-7900 UHF/VHF</li>
          <li>ABBREE Tactical Handheld Radio Antenna UHF/VHF</li>
          <li>30m or 100ft long "Random wire" antenna with 9:1 Balun</li>
        </ul>
        <h2>Other</h2>
        <ul>
          <li>RTL-SDR v3</li>
          <li>RTL-SDR v4 (Broken)</li>
        </ul>
      </div>
    )
  };

  const [language, setLanguage] = useState(localStorage.getItem('selectedLanguage') || 'fi');

  useEffect(() => {
    localStorage.setItem('selectedLanguage', language);
  }, [language]);

  return (
    <div>
      <Header titles={titles} setLanguage={setLanguage} language={language} />
      <div className="row">
        <div className="col-md-6">{laitteistoContent[language]}</div>
        <div className="col-md-6 text-right">
          <SolarTerrestrialContainer />
        </div>
      </div>
      <br />
      <br />
      <Gallery gallery={gallery} language={language} />
      <Logbook />
      <CookiePopup />
      <AnalyticsAds />
      <footer className="bottom bg-dark text-white text-center p-2">
        &copy; 2024 OH3CYT
      </footer>
    </div>
  );
};

export default App;
