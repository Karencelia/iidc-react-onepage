import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faMouse, faPhone, faToggleOn } from '@fortawesome/free-solid-svg-icons';
import AliceCarousel from 'react-alice-carousel';

const Home = () => {
  
    return (
        <>
        <AliceCarousel infinite disableButtonsControls disableDotsControls autoPlay autoPlayInterval={2000}>
          <div className='slide1'></div>
          <div className='slide2'></div>
          <div className='slide3'></div>
        </AliceCarousel>
  {/* Header Section */}
  <div className="main-pic">
  <div>
    <header>
      <div className="logo">
        <img
          src="/logo.png"
          alt="Dance Logo"
          width="50px"
          className="logo-img"
        />
        <nav>
          <div className="menuList" id="sidemenu">
            <ul className="main">
              <li>
                <a href="#">intro</a>
              </li>
              <li>
                <a href="#">countdown</a>
              </li>
              <li>
                <a href="#">notes</a>
              </li>
              <li>
                <a href="#">location</a>
              </li>
              <li>
                <a href="#">contact</a>
              </li>
            </ul>
            <i
              className="fa fa-window-close"
              id="close"
              onclick="closemenu()"
            />
          </div>
        </nav>
        <div className="toggleswitch">
          <i className="fa-solid fa-moon moon" />
          <button className="toggle">
            <FontAwesomeIcon icon={faToggleOn} className="fa-solid fa-toggle-on toggleon" id="toggle" />
          </button>
          <i className="fa-solid fa-sun sun" />
        </div>
        <a href="#" className="call">
          <FontAwesomeIcon icon={faPhone} className="fa-solid fa-phone-volume" />
        </a>
        <i className="fa-solid fa-bars" id="bar" onclick="openmenu()" />
      </div>
    </header>
  </div>
  {/* Hero Section */}
  <section>
    <div className="imgText">
      <h5>imomotimi foundation presents</h5>
      <div className="ijaw">
        <h1>imomotimi ijaw </h1>
        <h1>dance contest 2024</h1>
      </div>
      <FontAwesomeIcon className="fa-solid fa-less-than arrowLeft" />
      <i className="fa-solid fa-greater-than arrowRight" />
      <button value="submit" className="button">
        Download entry form <FontAwesomeIcon icon={faDownload} className="fa-solid fa-download download" />
      </button>
      <p>
        All duly filled out forms and the entry fees should be brought to the
        auditions.
      </p>
      <FontAwesomeIcon icon={faMouse} className="fas fa-mouse" id="mouse" />
    </div>
    <img
      id="shapeTop"
      src="/shape-top-white-80.png"
      alt="shapeTop"
      width="100%"
    />
  </section>
</div>

</>

    )
}
export default Home;