import React from 'react';

import noImg from '../../assets/img/bg/no-graph02.jpg';
import MovieReview from "./MovieReview";

const MovieInfo = ({ cont, category, name, genre, director, actor, releaseDate, rating }) => {
    const tdStyle = {
        width: '20%'
    }

    return (
        <>
            <div className='movie_summary'>
                <p className='description'>
                    {cont}
                </p>
            </div>
            {/* info */}
            <div className='movie_info'>
                <div className='con_table'>
                    <table className='table01'>
                        <colgroup>
                            <col style={tdStyle}/>
                            <col/>
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>이름</th>
                                <td>{name}</td>
                            </tr>
                            <tr>
                                <th>장르</th>
                                <td>{genre}</td>
                            </tr>
                            <tr>
                                <th>카테고리</th>
                                <td>{category}</td>
                            </tr>
                            <tr>
                                <th>감독</th>
                                <td>{director}</td>
                            </tr>
                            <tr>
                                <th>출연진</th>
                                <td>{actor}</td>
                            </tr>
                            <tr>
                                <th>개봉일자</th>
                                <td>{releaseDate}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* 평점 */}
            <div className='movie_graph'>
                <div className='col'>
                    <h6 className='col_tit'>실관람 평점</h6>
                    <div className='graph'>
                        <img src={noImg} alt='' />
                        <p>{rating}</p>
                    </div>
                </div>
            </div>
            {/* Review */}
            <MovieReview />
        </>
    );
}

export default MovieInfo;