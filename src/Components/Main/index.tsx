import './index.scss';
import Header from './Header';
import Search from './Search';
import Temperature from './Temperature';
import VeryShortTermForecast from './VeryShortTermForecast';
import MediumTermForecast from './MediumTermForecast';

function MainPage() {
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
