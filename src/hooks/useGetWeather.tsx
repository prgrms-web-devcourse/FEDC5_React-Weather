import { useEffect, useState } from 'react';
import { GetApiProps } from '../Types/Api';
import axios from 'axios';

function useGetWeather({
  service,
  numOfRows,
  pageNo,
  dataType = 'JSON',
  base_date,
  base_time,
  nx,
  ny
}: GetApiProps) {
  const [weatherData, setWeatherData] = useState('');

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const { data } = await axios.post('/api/getWeather', {
          service,
          numOfRows,
          pageNo,
          dataType,
          base_date,
          base_time,
          nx,
          ny
        });

        setWeatherData(data.response.body);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    getWeatherData();
  }, [service, numOfRows, pageNo, dataType, base_date, base_time, nx, ny]);

  return weatherData;
}

export default useGetWeather;
