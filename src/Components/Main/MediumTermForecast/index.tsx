import './index.scss';
import Icon from '../../Common/Icon';
import MediumTermForecastItem from './MediumTermForecastItem';

function MediumTermForecast() {
  const dummyData = [
    {
      day: 'Today',
      weatherState: 'Sunny',
      lowestTemperature: 4,
      highestTemperature: 13,
      currentTemperature: 13
    },
    {
      day: 'Wed',
      weatherState: 'Sunny',
      lowestTemperature: 4,
      highestTemperature: 13
    },
    {
      day: 'Thu',
      weatherState: 'Sunny',
      lowestTemperature: 6,
      highestTemperature: 14
    },
    {
      day: 'Fri',
      weatherState: 'Sunny',
      lowestTemperature: 8,
      highestTemperature: 17
    },
    {
      day: 'Sat',
      weatherState: 'Sunny',
      lowestTemperature: -3,
      highestTemperature: 9
    },
    {
      day: 'Sun',
      weatherState: 'Sunny',
      lowestTemperature: -6,
      highestTemperature: 1
    },
    {
      day: 'Mon',
      weatherState: 'Sunny',
      lowestTemperature: -7,
      highestTemperature: 2
    },
    {
      day: 'Tue',
      weatherState: 'Sunny',
      lowestTemperature: -3,
      highestTemperature: 6
    },
    {
      day: 'Wed',
      weatherState: 'Sunny',
      lowestTemperature: -7,
      highestTemperature: 1
    },
    {
      day: 'Thu',
      weatherState: 'Sunny',
      lowestTemperature: -9,
      highestTemperature: 1
    }
  ];
  const lowestTemperatures = dummyData.map((item) => item.lowestTemperature);
  const highestTemperatures = dummyData.map((item) => item.highestTemperature);
  const minTemperature = Math.min(...lowestTemperatures);
  const maxTemperature = Math.max(...highestTemperatures);

  return (
    <div className="medium-term-forecast">
      <div className="medium-term-forecast__title-wrap">
        <Icon
          className="medium-term-forecast__title-icon"
          size={24}
          iconText="Calendar_Month"
        />
        <span className="medium-term-forecast__title-text">
          10-DAY FORECAST
        </span>
      </div>
      <ul className="medium-term-forecast__list">
        {dummyData.map((props, index) => (
          <MediumTermForecastItem
            key={index}
            {...props}
            minTemperature={minTemperature}
            maxTemperature={maxTemperature}
          />
        ))}
      </ul>
    </div>
  );
}

export default MediumTermForecast;
