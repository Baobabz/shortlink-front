import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="green-nav">
        <h2>S.R.L</h2><h4>(shortlink url)</h4>
      </div>
      <h1 style={{fontSize:'50px'}}><font style={{color:'orange'}}>링크 단축</font> 서비스</h1>
      <input className="input" type={Text} size={50} maxLength={50} placeholder={"https://단축 할 주소를 입력하세요"}></input><br></br>
      <span>변환</span>
    </div>
  );
}

export default App;
