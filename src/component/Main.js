import React, { useState } from "react";
import "./Main.css";

function Main() {
  const [atext, setAtext] = useState(""); // atext = 변환된 링크
  const [url, setUrl] = useState(""); // url = 입력한 링크

  const onChange = (e) => {
    setUrl(e.target.value);
  };

  async function Change() {
    const a = fetch("https://2sl.me:25000/api/v1/urls", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: url,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setAtext(data.srl);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(a);
  }

  function Paste() {
    navigator.clipboard.writeText(atext);
    alert("Copy Complete!");
  }

  return (
    <div className="App">
      <h1 style={{ fontSize: "50px", margin: "100px" }}>
        <font style={{ color: "orange" }}>링크 단축</font> 서비스
      </h1>
      <input
        className="input"
        type="text"
        onChange={onChange}
        size={50}
        maxLength={50}
        placeholder={"https://단축 할 주소를 입력하세요"}
      ></input>
      <br></br>
      <button className="click " onClick={Change}>
        변환
      </button>
      &nbsp;
      <button className="click " onClick={Paste}>
        복사
      </button>
      <div id="result">{atext}</div>
    </div>
  );
}

export default Main;
