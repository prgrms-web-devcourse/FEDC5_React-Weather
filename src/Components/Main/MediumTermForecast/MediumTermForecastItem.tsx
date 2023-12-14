import Icon from '../../Common/Icon';
import { mediumTermForecastItemProps } from '../../../Types/mediumTermForecast';
import useGetWidth from '../../../Hooks/useGetWidth';

function MediumTermForecastItem({
  day,
  weatherState,
  lowestTemperature,
  highestTemperature,
  currentTemperature,
  minTemperature,
  maxTemperature
}: mediumTermForecastItemProps) {
  const [barWidth, ref] = useGetWidth();
  const total = maxTemperature - minTemperature;
  const left = lowestTemperature - minTemperature;
  const width = highestTemperature - lowestTemperature;
  const unit = (barWidth as number) / total;

  return (
    <li className="medium-term-forecast-item">
      <span className="medium-term-forecast-item__day">{day}</span>
      <Icon
        className="medium-term-forecast-item__icon"
        size={24}
        iconText={weatherState}
      />
      <div className="medium-term-forecast-item__temperature-wrap">
        <span className="medium-term-forecast-item__temperature--lowest">
          {lowestTemperature}°
        </span>
        <div
          className="medium-term-forecast-item__temperature-bar"
          ref={ref as (node: HTMLDivElement) => void}>
          <div
            className="medium-term-forecast-item__temperature-bar--inner-color"
            style={{
              left: `${unit * left}px`,
              width: `${unit * width}px`
            }}></div>
          {currentTemperature ? (
            <div
              className="medium-term-forecast-item__temperature-bar--current"
              style={{
                left: `${unit * (currentTemperature - minTemperature)}px`
              }}></div>
          ) : null}
        </div>
        <span className="medium-term-forecast-item__temperature--highest">
          {highestTemperature}°
        </span>
      </div>
    </li>
  );
}

export default MediumTermForecastItem;
