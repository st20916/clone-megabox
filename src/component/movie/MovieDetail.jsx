import React from 'react';
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import MovieTab from "./MovieTab";              // Import Tab Component

const MovieDetail = () => {
    const location = useLocation()
        , searchParams = new URLSearchParams(location.search)
        , movieId = searchParams.get('seq')
        , movies = useSelector(state => state.movies)
        , selectedMovie = movies.find(movie => movie.id === parseInt(movieId));

    // inline Style
    const inlineStyles = {
        backgroundImage: `url(${selectedMovie.imagePath})`
    }

    if (!selectedMovie) {
        return <div>영화를 찾을 수 없습니다.</div>;
    }

    return (
        <main id='main'>
            <div className='movie_detail_page'>
                <div className='bg_img' style={inlineStyles}></div>
                <div className='bg_mask'></div>
                <div className='cont'>
                    <div className='info'>
                        <h1 className='tit'>{selectedMovie.name}</h1>
                        <div className='btn_util'>
                            <button type='button' className='btn_line3'>
                                <span className='ri-heart-line'></span>
                                1.4K
                            </button>
                            <button type='button' className='btn_line3'>
                                <span className='ri-share-line'></span>
                                공유하기
                            </button>
                        </div>
                        <div className='grade'>
                            <strong>관람 등급</strong>
                            <p>{selectedMovie.ageAttendance}</p>
                        </div>
                    </div>
                    <div className='poster'>
                        <img src={selectedMovie.imagePath} alt={selectedMovie.name}/>
                    </div>
                </div>
            </div>
            <div className='main_wrap'>
                <div id='contents'>
                    {/* movie */}
                    <div id='contents_body'>
                        <MovieTab cont={selectedMovie.description}
                                  name={selectedMovie.name}
                                  category={selectedMovie.category}
                                  genre={selectedMovie.genre}
                                  director={selectedMovie.director}
                                  actor={selectedMovie.actor}
                                  releaseDate={selectedMovie.releaseDate}
                                  rating={selectedMovie.rating}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default MovieDetail;