import { LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="row position-absolute">
      <img src={LOGO} alt="logo" width="150" height="70" />
    </div>
  );
};

export default Header;
