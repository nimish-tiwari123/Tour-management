import { authGirl } from "../../assets/bgImages";
import "./style.css";
const Authentication = () => {
  return (
    <div className="bg-auth p-5">
      <div className="px-5 w-100 h-100">
        <div className="side-auth w-100 h-100 rounded-3 d-flex justify-content-between flex-column align-items-center overflow-hidden">
          <h1 className="text-light fw-bold px-5 pt-4 fs-2 text-start">
            Discover new horizons with just one click – your adventure awaits!
          </h1>
          <img src={authGirl} alt="Girl" className="auth-girl mt-4" />
        </div>
      </div>
    </div>
  );
};

export default Authentication;
