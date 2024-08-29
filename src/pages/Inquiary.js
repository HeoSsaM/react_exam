import React, { useState } from 'react';
import Header from '../component/Header';

function Inquiry() {
  const [inquiries, setInquiries] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleAddInquiry = () => {
    if (inputText.trim()) {
      setInquiries([...inquiries, inputText]);
      setInputText('');
    }
  };

  const btnDelete = (index) => {
    const updatedInquiries = inquiries.filter((_, idx) => idx !== index);
    setInquiries(updatedInquiries);
  };

  return (
    <>
      <Header />
      <div class="inquiryArea">
        <h2>상담문의 페이지</h2>
        <div class="inputArea">
          <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
          <button onClick={handleAddInquiry}>작성완료</button>
        </div>
        <ul>
          {inquiries.map((inquiry, index) => (
            <li key={index} className='inquiryList'>
              {inquiry}
              <button onClick={() => btnDelete(index)}>삭제</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Inquiry;
