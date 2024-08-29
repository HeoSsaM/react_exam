import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <ul>
                <li><Link to="../">홈</Link></li>
                <li><Link to="../products">상품소개</Link></li>
                <li><Link to="../inquiry">상품문의</Link></li>
            </ul>
        </header>
    )
}

export default Header
