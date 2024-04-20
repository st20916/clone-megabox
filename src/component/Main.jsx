import React from 'react';
import {useSelector} from "react-redux";

const Main = () => {
    // Redux Store를 사용하여 영화 목록 호출
    const movies = useSelector(state => state.movies)
        , randomMovies = movies.length < 4 ? movies : getRandomMovies(movies, 4);

    /**
     *  랜덤 영화 표출
     *
     *  @param      array
     *  @param      num
     *  @returns    {*}
     */
    function getRandomMovies(array, num) {
        const shuffled = array.slice(0);         // 복사본 생성

        let i = array.length,
            temp, index;

        // 배열 섞기
        while (i--) {
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
        }
        // num 개수 만큼의 요소 선택하여 return
        return shuffled.slice(0, num);
    }

    return (
        <section className='section section01'>
            <div className='main_wrap'>
                <div className='cont_area'>
                    <h3 className='area_tit'>박스오피스</h3>
                    <div className='movie_list'>
                        {randomMovies.map(movie => (
                            <div className='li_boxRank' key={movie.id}>
                                <img src={movie.imagePath} alt={movie.name} />
                                <div className='list_btns'>
                                    <button type='button' className='btn_line3'>
                                        <span className='ri-heart-line'></span>
                                        1.4K
                                    </button>
                                    <button type='button' className='btn_style02'>예매</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Main;