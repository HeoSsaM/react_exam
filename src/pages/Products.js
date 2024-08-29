import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../component/Header';
import Card from '../Card';

const productData = [
  { id: 1, title: '여인초 화이트폴리스톤 ', description: '촉촉한 습도와 은은한 간접광을 좋아하는 여인초는 집 안을 이국적으로 만들어 줄 수 있는 훌륭한 실내 공기정화 식물', image: 'https://contents.sixshop.com/uploadedFiles/20883/default/image_1666587559267.jpg' },
  { id: 2, title: '행운을 부르는 동그란 리스', description: '최근 주목받는 식물은 코덱스(Caudex)라 불리는 괴근식물은 애호가들 사이에서는 소장 욕구도 높아지고, 수명도 굉장히 길어 평생 반려 식물로 가치가 높다', image: 'https://www.womansense.co.kr/upload/woman/article/202002/thumb/43873-403074-sampleM.jpg' },
  { id: 3, title: '아레카야자 생화 플랜트', description: '아레카야자는 NASA가 선정한 실내 공기 정화 1위 식물로 독성이 없어서 반려동물에게도 안전하며 빛이 적은 곳에서도 잘 자라 초보가드너도 어려움 없이 키울 수 있는 식물', image: 'https://img.hankyung.com/photo/202101/AD.25070771.1.jpg' },
  { id: 4, title: '안스리움 후커리', description: '숟가락처럼 움푹 파인 짙은 녹색의 뾰족한 하트모양의 잎이 특이한 안스리움은 신비롭고 우아한 아름다운 잎은 물론, 작고 앙증맞은 꽃도 감상할 수 있는 희귀한 식물', image: 'https://cdn.imweb.me/thumbnail/20240721/9be408b32a23e.png' },
];

function Products() {
  const navigate = useNavigate();

  const handleInquiry = () => {
    navigate('/inquiry');
  };

  return (
    <>
      <Header />
      <div className='contents products'>
        <h2>상품소개 페이지</h2>
        {productData.map(product => (
          <Card
            key={product.id}
            title={product.title}
            description={product.description}
            image={product.image}
            onInquire={handleInquiry}
          />
        ))}
      </div>
    </>
  );
  
}

export default Products;
