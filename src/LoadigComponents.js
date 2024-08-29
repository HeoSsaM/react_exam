import React from 'react';
import { BeatLoader } from 'react-spinners';

const LoadingComponents = ({ loading }) => { // loading prop 사용
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <BeatLoader color="#df4c6c" loading={loading} />
    </div>
  );
}

export default LoadingComponents;
