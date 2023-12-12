import './index.scss';
import Header from './Header';
import Search from './Search';
import Temperature from './Temperature';
import VeryShortTermForecast from './VeryShortTermForecast';
import axios from 'axios';

function MainPage() {
  (async () => {
    const res = await fetch('/api/getWeather', {
      method: 'POST'
    });

    console.log(res);
    const json = await res.json();
  })();

  // const a = async () => {
  //   // const data = await axios.post('/api/getWeatherApi', {
  //   //   service: 'getUltraSrtFcst',
  //   //   numOfRows: '100',
  //   //   pageNo: '1',
  //   //   dataType: 'JSON',
  //   //   base_date: '20231212',
  //   //   base_time: '0630',
  //   //   nx: '55',
  //   //   ny: '127'
  //   // });
  //   // console.log('요청한 API 데이터 :', data);
  // };

  return (
    <>
      <Search />
      <Header />
      <section className="main-section">
        <Temperature size={40} />
        <VeryShortTermForecast />
      </section>
    </>
  );
}

export default MainPage;
