import { useNavigate } from "react-router-dom";
import { LOGIN, REGISTER } from "../../utils/variables";

const FirstScreen = () => {
  const nav = useNavigate();
  return (
    <div className="first_screen">
      <div className="first_image">
        <img src="/src/assets/images/first_page.png" alt="tour1" />
      </div>
      <div className="heading1">
        <h1>
          Discover the world <br /> Create memories
        </h1>
      </div>
      <div className="buttons-container">
        <button
          onClick={() => {
            nav(LOGIN);
          }}
        >
          Sign in
        </button>
        <button
          onClick={() => {
            nav(REGISTER);
          }}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default FirstScreen;
