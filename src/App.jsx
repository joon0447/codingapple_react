import { useState } from 'react';
import './App.css'


function App() {
  
  let post = '강남 우동 맛집';
  let [a,b] = useState('남자 코트 추천');
  let [aa, bb] = useState('청주 우동 맛집');
  let [aaa, bbb] = useState('서울 여행지');

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "red", fontSize: "16px" }}>블로그임</h4>
      </div>
      <div className="list">
        <h4>{a}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{aa}</h4>
        <p>2월 16일 발행</p>
      </div>
      <div className="list">
        <h4>{aaa}</h4>
        <p>2월 18일 발행</p>
      </div>
    </div>
  );
}

export default App
