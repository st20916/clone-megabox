import React from 'react';
import {Link} from "react-router-dom";

const Sitemap = () => {
    return (
        <main id='main'>
            <div className='main_wrap'>
                <div id='contents'>
                    <div className='contents_util'>
                        <h3 className='contents_title'>사이트맵</h3>
                    </div>
                    <div id='contents_body'>
                        <div className='sitemap'>
                            <ul>
                                <li>
                                    <div>
                                        <h1 className='depth-01'>영화</h1>
                                        <ul className='depth-02'>
                                            <li>
                                                <Link to='/movie'>전체 영화</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <h1 className='depth-01'>예매</h1>
                                        <ul className='depth-02'>
                                            <li>
                                                <Link to='/runtime'>상영 시간표</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <h1 className='depth-01'>극장</h1>
                                        <ul className='depth-02'>
                                            <li>
                                                <Link to='/runtime'>전체 극장</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <h1 className='depth-01'>이벤트</h1>
                                        <ul className='depth-02'>
                                            <li>
                                                <Link to='/runtime'>진행 중 이벤트</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <h1 className='depth-01'>스토어</h1>
                                        <ul className='depth-02'>
                                            <li>
                                                <Link to='/runtime'>새로운 상품</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Sitemap;