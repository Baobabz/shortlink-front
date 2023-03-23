import React, { useState } from "react";
import "./Main.css";
<<<<<<< HEAD

function Main() {
  const [atext, setAtext] = useState(""); // atext = 변환된 링크
  const [url, setUrl] = useState(""); // url = 입력한 링크
=======
import Loading from "./Loading";

function Main() {
  const [clink, setAtext] = useState(""); // clink = 변환된 링크
  const [url, setUrl] = useState(""); // url = 입력한 링크
  const [loading, setLoading] = useState(true);
>>>>>>> ffe6dad (spinner)

  const onChange = (e) => {
    setUrl(e.target.value);
  };

<<<<<<< HEAD
  async function Change() {
=======
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
>>>>>>> ffe6dad (spinner)
    const a = fetch("https://2sl.me:25000/api/v1/urls", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
<<<<<<< HEAD
      body: JSON.stringify({
        url: url,
      }),
=======
      body: JSON.stringify({ url: url }),
>>>>>>> ffe6dad (spinner)
    })
      .then((response) => response.json())
      .then((data) => {
        setAtext(data.srl);
<<<<<<< HEAD
      })
=======
        setLoading(false);
      })

>>>>>>> ffe6dad (spinner)
      .catch((error) => {
        console.error(error);
      });
    console.log(a);
  }

  function Paste() {
<<<<<<< HEAD
    navigator.clipboard.writeText(atext);
=======
    navigator.clipboard.writeText(clink);
>>>>>>> ffe6dad (spinner)
    alert("Copy Complete!");
  }

  return (
    <div className="App">
<<<<<<< HEAD
      <h1 style={{ fontSize: "50px", margin: "100px" }}>
        <font style={{ color: "orange" }}>링크 단축</font> 서비스
=======
      <h1
        style={{
          fontSize: "50px",
          margin: "100px",
        }}
      >
        <font style={{ color: "orange" }}>링크 단축</font>
        서비스
>>>>>>> ffe6dad (spinner)
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
<<<<<<< HEAD
      <button className="click " onClick={Change}>
        변환
      </button>
=======
      <div>
        {loading ? <Loading /> : null}
        <button className="click " onClick={Change}>
          변환
        </button>
      </div>
>>>>>>> ffe6dad (spinner)
      &nbsp;
      <button className="click " onClick={Paste}>
        복사
      </button>
<<<<<<< HEAD
      <div id="result">{atext}</div>
=======
      <div id="result">{clink}</div>
>>>>>>> ffe6dad (spinner)
    </div>
  );
}

export default Main;
