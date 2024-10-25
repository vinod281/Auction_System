import React, { useCallback, useState, useEffect, useRef } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

// Default center (example coordinates)
const defaultCenter = {
  lat: 40.73061, // Latitude for New York City
  lng: -73.935242, // Longitude for New York City
};

const LocationPicker = ({ onLocationSelect }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, // Use environment variable for safety
  });

  const [selectedPosition, setSelectedPosition] = useState(defaultCenter);

  const handleMapClick = useCallback(
    (event) => {
      if (event.latLng) {
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();
        setSelectedPosition({ lat, lng });
        if (onLocationSelect) {
          onLocationSelect({ lat, lng });
        }
      }
    },
    [onLocationSelect] // No need for selectedPosition here as it's handled by state
  );

  // IntersectionObserver logic
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('Element is in view!');
        }
      });
    });

    const currentElement = elementRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []); // Empty dependency array, runs only once on mount

  if (loadError) {
    return <div>Error loading Google Maps: {loadError.message}</div>;
  }

  if (!isLoaded) {
    return <div>Loading Google Maps...</div>;
  }

  return (
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={selectedPosition}
        zoom={10}
        onClick={handleMapClick}
      >
        <Marker position={selectedPosition} />
      </GoogleMap>

      {/* This section is independent of the GoogleMap */}
      
      
    </>
  );
};

export default React.memo(LocationPicker);
