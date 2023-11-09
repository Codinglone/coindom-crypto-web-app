import {
  IconBrandDiscord,
  IconBrandTwitter,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [mobile, setMobile] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  const goTop = () => {
    window.scrollTo({
      top: (0, 0),
      behavior: "smooth",
    });
  };

  const openMobile = () => {
    setMobile(!mobile);
  };

  return (
    <>
      <nav className={sticky ? "sticky-nav" : ""}>
        <div className="navbar">
          <Link to="/">
            <p onClick={goTop}>COINDOM</p>
          </Link>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#market">Market</a>
            </li>
            <li>
              <a href="#choose-us">Choose Us</a>
            </li>
            <li>
              <a href="#join">Join</a>
            </li>
          </ul>
          <span>
            <IconBrandTwitter />
            <IconBrandDiscord />
            {/* mobile */}
            <IconMenu2 onClick={openMobile} className="hamburger-menu" />
          </span>
        </div>
      </nav>

      {/* mobile nav */}
      <div className={`mobile-nav ${mobile ? "mobile-up" : ""}`}>
        <IconX onClick={openMobile} className="close-mobile" />
        <ul>
          <li onClick={openMobile}>
            <a href="#home">Home</a>
          </li>
          <li onClick={openMobile}>
            <a href="#market">Market</a>
          </li>
          <li onClick={openMobile}>
            <a href="#choose-us">Choose Us</a>
          </li>
          <li onClick={openMobile}>
            <a href="#join">Join</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
