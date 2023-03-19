import Password from '../assets/passwordGen2.png';
import Schedule from '../assets/scheduleExample.png';
import WeatherApp from '../assets/weather-app-pic.png';
import Note from '../assets/new-note.png';
import Carry from '../assets/carryon.png';
import Tune from '../assets/tune-in.png';

const Portfolio = () => {
  return (
    <div className="flex flex-col">
      <h1 className='pt-3 font-bold text-xl'>My developer Portfolio</h1>
      <div className="applications grid grid-cols-2 gap-10 justify-center p-7">
      <div className="card w-96 bg-base-100 shadow-xl  justify-self-end">
          <figure><img src={Tune} alt="Tune-in" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              Tune-In
            </h2>
            <p>Social networking site for musicians</p>
            <div className="card-actions justify-end">
              <a className='link font-semibold' href="https://github.com/David8127/Tune-In" target="_blank" >Github Repo</a>
              <a className='link link-primary font-semibold' href="https://tune-in-blog.herokuapp.com/" target="_blank" >Deployed App</a>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl justify-self-start">
          <figure><img src={Schedule} alt="scheduler" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              Work Day Scheduler
            </h2>
            <p>Color-coded work day scheduler</p>
            <div className="card-actions justify-end">
              <a className='link font-semibold' href="https://github.com/David8127/Calendar-2" target="_blank" >Github Repo</a>
              <a className='link link-primary font-semibold' href="https://david8127.github.io/Calendar-2/" target="_blank" >Deployed App</a>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl justify-self-end">
          <figure><img src={Password} alt="note-taker" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              Password generator
            </h2>
            <p>Generates random, strong passwords</p>
            <div className="card-actions justify-end">
              <a className='link font-semibold' href="https://github.com/David8127/Password-Generator" target="_blank" >Github Repo</a>
              <a className='link link-primary font-semibold' href="https://david8127.github.io/Password-Generator/" target="_blank" >Deployed App</a>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl justify-self-start">
          <figure><img src={WeatherApp} alt="weather-app" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              Weather App
            </h2>
            <p>Uses OpenWeather API to get current weather & forecast</p>
            <div className="card-actions justify-end">
              <a className='link font-semibold' href="https://github.com/David8127/WeatherApp" target="_blank" >Github Repo</a>
              <a className='link link-primary font-semibold' href="https://david8127.github.io/WeatherApp/" target="_blank" >Deployed App</a>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl justify-self-end">
          <figure><img src={Carry} alt="carry-on" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              CarryOn
            </h2>
            <p>Helps the user plan what to pack on a trip</p>
            <div className="card-actions justify-end">
              <a className='link font-semibold' href="https://github.com/David8127/CarryOn-App" target="_blank" >Github Repo</a>
              <a className='link link-primary font-semibold' href="https://david8127.github.io/CarryOn-App/" target="_blank" >Deployed App</a>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl justify-self-start">
          <figure><img src={Note} alt="password-generator" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              Note-Taker
            </h2>
            <p>Clean & simple note taker application</p>
            <div className="card-actions justify-end">
              <a className='link font-semibold' href="https://github.com/David8127/Note-Taker" target="_blank" >Github Repo</a>
              <a className='link link-primary font-semibold' href="https://note-taker-djm.herokuapp.com/" target="_blank" >Deployed App</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;