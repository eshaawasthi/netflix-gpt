import { LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="row header-wrapper position-absolute">
      <img src={LOGO} alt="logo" />
    </div>
  );
};

export default Header;
