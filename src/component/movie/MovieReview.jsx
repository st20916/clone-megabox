import React, { useState } from 'react';

import profileImg from '../../assets/img/bg/profile.png';

const MovieReview = () => {
    // props로 들어 온 id 값과 매칭하기 위해 선언
    // const movies = useSelector(state => state.movies);
    // const matchMovies = movies.find(movie => movie.id === parseInt(id));
    const [reviewText, setReviewText] = useState('')
        , [reviews, setReviews] = useState([]);

    /* Input Value Change */
    const handleInputChange = (e) => {
        setReviewText(e.target.value);
    };

    /* Review Add */
    const handleAddReview = () => {
        if (reviewText.trim() !== '') {
            setReviews([...reviews, reviewText]);
            setReviewText('');
        }
    };

    /* Enter Key Press Event */
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddReview();
        }
    };

    return (
        <>
            <div className='movie_idv_story'>
                <div className='story_area'>
                    <div className='user_prof'>
                        <img src={profileImg} alt='profile'/>
                        <p className='user_id'>MEGABOX</p>
                    </div>
                    <div className='story_wrap'>
                        <input type='text'
                               className='form_control'
                               value={reviewText}
                               onKeyPress={handleKeyPress}
                               onChange={handleInputChange}
                               placeholder='한 줄 리뷰를 입력하세요.'
                               autoComplete='none'/>
                        <button type='button' className='btn' onClick={handleAddReview}>등록</button>
                    </div>
                </div>
                <h4 className='under_title'>전체 (총 <small>{reviews.length}</small>건)</h4>
                {/* 리뷰 List */}
                <div className='review_area'>
                    {reviews.length === 0 ? (
                        <p className='no'>등록 된 리뷰가 없습니다.</p>
                        ) : (
                        <ul className='list'>
                            {reviews.map((review, index) => (
                                <li key={index}>
                                    <div className='user_prof'>
                                        <span className='profile'><i className='ri-user-3-line'></i></span>
                                        <strong className='user_id'>사용자(user{index + 1})</strong>
                                    </div>
                                    <p>{review}</p>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </>
    );
}

export default MovieReview;