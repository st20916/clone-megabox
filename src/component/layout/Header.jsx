import React from 'react';
import { Link } from "react-router-dom";                    // React 내 a 태그보단 Link 권장 (브라우저 주소만 변경할 뿐, 페이지를 새로 불러오진 않음.)

import '../../styles/layout/header.css';                    // Import header css
import logoImg from '../../assets/img/header/logo.png';     // Import Logo img

const Header = () => {
    return (
        <header id='header' className='header'>
            <div className='header_wrap'>
                <Link to='/' className='logo'>
                    <img src={logoImg} alt='logo' />
                </Link>
                {/* gnb */}
                <nav id='gnb'>
                    <ul id='head_menu'>
                        <li>
                            <Link to='/' title='영화'>영화</Link>
                        </li>
                        <li>
                            <Link to='/' title='예매'>예매</Link>
                        </li>
                        <li>
                            <Link to='/' title='극장'>극장</Link>
                        </li>
                        <li>
                            <Link to='/' title='이벤트'>이벤트</Link>
                        </li>
                        <li>
                            <Link to='/' title='스토어'>스토어</Link>
                        </li>
                        <li>
                            <Link to='/' title='혜택'>혜택</Link>
                        </li>
                    </ul>
                </nav>
                {/* util */}
                <div className='util'>
                    <Link to='/sitemap' className='allmenu'>
                        <span className='sr-only'>전체메뉴</span>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;