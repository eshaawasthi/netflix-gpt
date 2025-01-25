import { LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="row position-absolute">
      <img src={LOGO} alt="logo" width="200" height="100" />
    </div>
  );
};

export default Header;
