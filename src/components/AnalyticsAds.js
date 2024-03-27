import React, { useEffect } from 'react';

const AnalyticsAds = () => {
  useEffect(() => {
    // Google Analytics
    const trackingID = 'G-B2GD7H6D8B';

    // Lisää Google Analyticsin gtag-koodi
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingID}`;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', trackingID);
    };
  }, []);

  return null;
};

export default AnalyticsAds;
