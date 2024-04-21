import React from 'react';

import '../../styles/layout/footer.css';
import {Link} from "react-router-dom";                    // Import footer css

const Footer = () => {
    return (
        <footer id='footer' className='footer'>
            <div className='footer_wrap'>
                <div className='footer_top'>
                    <ul className='fnb'>
                        <li><Link to='/'>회사 소개</Link></li>
                        <li><Link to='/'>인재 채용</Link></li>
                        <li><Link to='/'>사회 공헌</Link></li>
                        <li><Link to='/'>제휴 / 광고 / 부대 사업문의</Link></li>
                        <li><Link to='/'>이용 약관</Link></li>
                    </ul>
                </div>
            </div>
            <div className='footer_bottom'>
                <div className='ci'></div>
                <div className='info'>
                    <address>서울특별시 성동구 왕십리로 50, 6층 (성수동1가, 메가박스 스퀘어)</address>
                    <p className='copyright'>COPYRIGHT © MegaboxJoongAng, Inc. All rights reserved</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;