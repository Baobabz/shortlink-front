import Header from "../component/Header";
import Main from "../component/Main";
import Footer from "../component/Footer";

function MainPage() {
  return (
    <div className="wrap">
      <div className="contentWrap">
        <Header />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;
