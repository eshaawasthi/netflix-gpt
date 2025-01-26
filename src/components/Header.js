import { LOGO, USER_AVATAR } from "../utils/constants";

const Header = () => {
  return (
    <div className="row header-wrapper position-absolute">
      <img src={LOGO} alt="logo" />
      <img src={USER_AVATAR} alt="avatar" className="width-6 p-4" />
    </div>
  );
};

export default Header;
