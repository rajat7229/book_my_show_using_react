import React, {useEffect, useState} from 'react';
import axios from 'axios';
// Components
import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCard.component';
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.component';
import PosterSlider from '../components/PosterSlider/PosterSlider.component';
// Layout HOC
import DefaultLayoutHoc from '../layout/Default.layout';

const HomePage = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

  useEffect(() =>{
    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=04b88e5121dd38d6bdc3a2d82c9037fa");
      setRecommendedMovies(getTopRatedMovies.data.results);
    };
    requestTopRatedMovies();
  }, []);

  return (
    <>
      <HeroCarousel />
      <div className="container mx-auto px-4 md:px-12 my-8">
          <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">The best of Entertainment</h1>
          <EntertainmentCardSlider />
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
            <PosterSlider title="Recommended Movies" subtitle="List of recommended movies" posters={recommendedMovies} isDark={false} />
      </div>

      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png" alt="premier" className="h-full w-full" />
          </div>
          <PosterSlider title="Premiers" subject="Brand new releases every Friday" posters={premierMovies} isDark={true} />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
      <PosterSlider title="Online Streaming Event" subject="" posters={onlineStreamEvents} isDark={false} />
      </div>
    </>
  );
};

export default DefaultLayoutHoc(HomePage);