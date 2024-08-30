import './App.css';
import Search from './components/Search';
import MoreInfo from './components/MoreInfo';
import MainContent from './components/MainContent';
import WeekForecast from './components/WeekForecast';
import TodayForecast from './components/TodayForecast';
import AirQualityIndex from './components/AirQualityIndex';
import WeatherContextProvider from './contexts/WeatherContextProvider';

function App() {
    return (
        <WeatherContextProvider>
            <div className='relative h-auto w-full bg-cover bg-fixed pt-5'>
                
                {/* Video Background */}
                <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                    <source src="./cloudy.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                
                {/* Content Layer */}
                <div className="relative z-10">
                    <div className='h-screen sm:h-auto md:h-auto lg:h-screen'>
                        <div className="h-1/10">
                            <Search />
                        </div>
                        <div className="h-9/10">
                            <MainContent />
                        </div>
                    </div>
                    <div className='h-auto lg:h-screen w-full mt-10 flex justify-center items-center flex-wrap lg:flex-nowrap'>
                        <TodayForecast />
                        <WeekForecast />
                    </div>
                    <div className='h-auto w-full'>
                        <MoreInfo />
                        <AirQualityIndex />
                    </div>
                </div>
            </div>
        </WeatherContextProvider>
    );
}

export default App;
