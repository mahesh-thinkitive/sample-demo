import LogoIcon from "../../assets/images/Elysium_Logo.svg";

import BagIcon from "../../assets/images/bag.png";
import NotificationIcon from "../../assets/images/notification.png";
import ProfileIcon from "../../assets/images/profile.png";
import DownArrowIcon from "../../assets/images/arrow_header.png";

const Header = () => {
  return (
    <div className="header-container">
      <img src={LogoIcon} className="" />

      <div className="right-side-profile-block">
        <img src={BagIcon}/>
        <img src={NotificationIcon}/>
        <img src={ProfileIcon}/>
        <span>Olivia Rhye</span>
        <img src={DownArrowIcon}/>

      </div>
    </div>
  );
};

export default Header;
