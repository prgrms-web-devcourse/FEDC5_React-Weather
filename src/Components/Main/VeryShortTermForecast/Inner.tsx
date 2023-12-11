import { InnerProps } from '../../../Types/Inner';
import Image from '../../../Images';
import { useEffect, useState } from 'react';

const { Cloudy, Sun, Gale, Rain } = Image;

function Inner({ time, icon, temperature }: InnerProps) {
  const [weatherIcon, setWeatherIcon] = useState('');

  useEffect(() => {
    if (icon === 'sun') setWeatherIcon(Sun);
    if (icon === 'rain') setWeatherIcon(Rain);
    if (icon === 'gale') setWeatherIcon(Gale);
    if (icon === 'cloudy') setWeatherIcon(Cloudy);
  }, []);
  return (
    <div className="main-section-VeryShortTermForecast-inner">
      <div>{time}</div>
      <img
        src={weatherIcon}
        className="main-section-VeryShortTermForecast-img"
      />
      <div>{temperature}</div>
    </div>
  );
}

export default Inner;
