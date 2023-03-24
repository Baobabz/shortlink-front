import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

function LinkPage() {
  const params = useParams();
  const navigate = useNavigate();

  const getUrl = async () => {
    try {
      const response = await fetch(
        `https://2sl.me:25000/api/v1/urls/${params.base62}`,
        {
          method: "GET",
        },
      );
      if (response.ok) {
        const data = await response.json();
        return data.url;
      } else {
        throw new Error("Failed to fetch URL");
      }
    } catch (error) {
      console.error("Error:", error);
      navigate("/404");
    }
  };

  const url = getUrl();

  url.then((value) => {
    if (value !== undefined) {
      window.location.replace(value);
    } else {
      navigate("/404");
    }
  });

  return <div></div>;
}

export default LinkPage;
