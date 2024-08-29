import React from 'react';
import { useNavigate } from 'react-router-dom';


function Home() {
    const navigate = useNavigate();

    const gotoProducts = () => {
        navigate('/products');
    }
    return (
        <div className="home contents">
            <div className='titleArea'>
                <h1>Planteria</h1>
                <p>반려식물과 함께하는 행복한 일상을 시작해보세요.</p>
                <button className="btnStart" onClick={gotoProducts}>상품구경하기</button>
            </div>
        </div>
    );
}

export default Home;
