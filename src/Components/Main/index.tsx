import './index.scss';
import Header from './Header';
import Search from './Search';
import Temperature from './Temperature';
import VeryShortTermForecast from './VeryShortTermForecast';

function MainPage() {
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
