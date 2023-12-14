import { useState, useEffect } from 'react';
import { LocationType } from '../Types/Geolocation';
import axios from 'axios';

function useGeoCoding({ latitude, longitude }: LocationType) {
  const [addrName, setAddrName] = useState<string>();

  useEffect(() => {
    if (latitude && longitude) {
      const fetchData = async () => {
        try {
          const { data } = await axios.post('/api/kakaoAPI', {
            longitude,
            latitude
          });

          const address = `${data.documents[0].region_1depth_name} ${data.documents[0].region_2depth_name}`;
          setAddrName(address);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }
  }, [longitude, latitude]);

  return addrName;
}
export default useGeoCoding;
