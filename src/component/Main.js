import React, { useState } from "react";
import "./Main.css";
import Loading from "./Loading";

function Main() {
  const [clink, setAtext] = useState(""); // clink = 변환된 링크
  const [url, setUrl] = useState(""); // url = 입력한 링크
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    setUrl(e.target.value);
  };

  /*function Check(e) {
    if (e.startsWith("https://")) {
      console.log("correct link");
    } else {
      e.preventDefault();
    }
  }*/

  async function Change() {
    //Check(clink);
    setLoading(true);
    const a = fetch("https://2sl.me:25000/api/v1/urls", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: url }),
    })
      .then((response) => response.json())
      .then((data) => {
        setAtext(data.srl);
      })
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(a);
  }

  function Paste() {
    navigator.clipboard.writeText(clink);
    alert("Copy Complete!");
  }

  return (
    <div className="App">
      <h1
        style={{
          fontSize: "50px",
          margin: "100px",
        }}
      >
        <font style={{ color: "orange" }}>링크 단축</font>
        서비스
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
      <div>
        {loading ? <Loading /> : null}
        <button className="click " onClick={Change}>
          변환
        </button>
      </div>
      &nbsp;
      <button className="click " onClick={Paste}>
        복사
      </button>
      <div id="result">{clink}</div>
    </div>
  );
}

export default Main;
