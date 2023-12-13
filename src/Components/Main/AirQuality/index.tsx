import './index.scss';
import Icon from '../../../Components/Common/Icon';
function AirQuality() {
  const dummyData = {
    AQI: 65,
    level: '보통'
  };
  return (
    <div className="airquality">
      <div className="airquality__inner">
        <Icon
          className="airquality__icon"
          iconText="ac_unit"
        />
        <span className="airquality__title">대기질</span>
      </div>
      <div className="airquality__info">
        <span className="airquality__index">{dummyData.AQI}</span>
        <span className="airquality__level">{dummyData.level}</span>
      </div>
      <div className="airquality__description">
        <span>
          현재의 대기질 지수는 {dummyData.AQI} 수준으로, 어제 이 시간과
          비슷합니다.
        </span>
      </div>
    </div>
  );
}

export default AirQuality;
