import { useState, useEffect } from 'react';
import { LocationType } from '../Types/Geolocation';

function useGeolocation() {
  const [location, setLocation] = useState<LocationType>();

  const handleSuccess = (position: GeolocationPosition) => {
    const { latitude, longitude } = position.coords;

    setLocation({
      latitude,
      longitude
    });
  };

  useEffect(() => {
    const { geolocation } = navigator;

    if (!geolocation) {
      return;
    }

    geolocation.getCurrentPosition(handleSuccess);
  }, []);

  return location;
}

export default useGeolocation;
