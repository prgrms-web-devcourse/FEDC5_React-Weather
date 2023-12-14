import './index.scss';
import Header from './Header';
import Search from './Search';
import Temperature from './Temperature';
import VeryShortTermForecast from './VeryShortTermForecast';
import useGetWeather from '../../hooks/useGetWeather';
import { useEffect, useState } from 'react';
import MediumTermForecast from './MediumTermForecast';

function MainPage() {
  // 추후 들어올 x, y 좌표 값
  const [location, setLocation] = useState({ x: '55', y: '127' });
  // 아래 속성들이 변경될 때마다 API 요청 진행
  const [requestData, setRequestData] = useState({
    service: 'getUltraSrtFcst',
    numOfRows: '60',
    pageNo: '10',
    dataType: 'JSON',
    base_date: '20231213',
    base_time: '0600',
    nx: location.x,
    ny: location.y
  });

  const getWeatherData = useGetWeather({ ...requestData });

  useEffect(() => {
    console.log(getWeatherData);
  }, [requestData]);
  return (
    <>
      <Search />
      <Header />
      <section className="main-section">
        <Temperature size={40} />
        <VeryShortTermForecast />
        <MediumTermForecast />
      </section>
    </>
  );
}

export default MainPage;
