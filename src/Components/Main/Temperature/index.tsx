import './index.scss';
import temperatureImage from '../../../Images/temperature.png';
import { TemperatureProps } from '../../../Types/Temperature';

function Temperature({ temperature = 24, size }: TemperatureProps) {
  return (
    <div className="main-section-outer">
      <span className="main-section-text">{temperature}</span>
      <img
        src={temperatureImage}
        alt="온도 이미지"
        className="main-section-img"
        style={{ width: size }}
      />
    </div>
  );
}

export default Temperature;
