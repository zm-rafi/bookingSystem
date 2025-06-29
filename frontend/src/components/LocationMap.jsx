// src/components/LocationMap.js

import React, { useEffect } from 'react';

const LocationMap = () => {
  useEffect(() => {
    // Function to initialize the map after getting the user's location
    const initMap = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          // Initialize the GoMap with the user's current location
          const map = new GoMap.Map('map', {
            center: { lat, lon },
            zoom: 15,
          });

          // Add a marker at the user's current location
          new GoMap.Marker({
            position: { lat, lon },
            map: map,
            title: 'You are here',
          });
        });
      } else {
        alert('Geolocation is not supported by this browser.');
      }
    };

    initMap(); // Initialize the map when the component mounts
  }, []);

  return (
    <div
      id="map"
      style={{ width: '100%', height: '100vh' }}
    ></div>
  );
};

export default LocationMap;
