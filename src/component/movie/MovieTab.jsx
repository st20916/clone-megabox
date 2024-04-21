import React, { useState } from 'react';

import MovieInfo from "./MovieInfo";
import MovieReview from "./MovieReview";

const MovieTab = ({ cont, category, name, genre, director, actor, releaseDate, rating }) => {
    const [selectTab, setSelectTab] = useState(0);

    const tabs = [
        {
            id: 0,
            title: '주요 정보',
            content: <MovieInfo cont={cont}
                                category={category}
                                name={name}
                                genre={genre}
                                director={director}
                                actor={actor}
                                releaseDate={releaseDate}
                                rating={rating}
            />
        },
        {
            id: 1,
            title: '실 관람평',
            content: <MovieReview />
        }
    ]

    return (
        <>
            <div className='tab_list'>
                {/* tab */}
                <ul>
                    {tabs.map(tab => (
                        <li
                            key={tab.id}
                            onClick={() => setSelectTab(tab.id)}
                            className={selectTab === tab.id ? 'on' : ''}
                        >
                            {tab.title}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='tab_content'>
                {tabs.map(tab => (
                    <div key={tab.id} style={{ display: selectTab === tab.id ? 'block' : 'none' }}>
                        {tab.content}
                    </div>
                ))}
            </div>
        </>
    );
}

export default MovieTab;