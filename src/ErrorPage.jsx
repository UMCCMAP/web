import React from 'react';
import { useNavigate } from 'react-router-dom';

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1 style={{ color: 'red', fontSize: '5rem' }}>에러 페이지</h1>
      <button
        onClick={() => navigate(-1)}
        style={{ fontSize: '3rem', color: 'black', cursor: 'pointer' }}
      >
        뒤로 가기
      </button>
    </div>
  );
}

export default ErrorPage;
