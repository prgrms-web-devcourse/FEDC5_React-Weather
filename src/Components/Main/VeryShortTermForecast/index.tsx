import './index.scss';
import Inner from './Inner';

function VeryShortTermForecase() {
  const DUMMY = [
    {
      time: '09',
      icon: 'sun',
      temperature: 22
    },
    {
      time: '10',
      icon: 'rain',
      temperature: 23
    },
    {
      time: '11',
      icon: 'cloudy',
      temperature: 17
    },
    {
      time: '12',
      icon: 'sun',
      temperature: 22
    },
    {
      time: '13',
      icon: 'sun',
      temperature: 22
    },
    {
      time: '14',
      icon: 'gale',
      temperature: 10
    }
  ];
  return (
    <div className="main-section-VeryShortTermForecast">
      {DUMMY.map(({ time, icon, temperature }) => (
        <Inner
          time={time}
          icon={icon}
          temperature={temperature}
          key={time}
        />
      ))}
    </div>
  );
}

export default VeryShortTermForecase;
