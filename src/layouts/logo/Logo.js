import LogoDark from "../../assets/images/logos/amplelogo.svg";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <a style={{width:"80%", height: "min-content"}}>
        {/* <img src="https://periscope-tech.com/wp-content/uploads/elementor/thumbs/Periscope-final-logo-04-pgeodk1lay0sxgyuyfblyzw0t8yclt6413d3larlh0.png" alt="logo" /> */}
        <img src="https://periscope-tech.com/wp-content/uploads/2021/05/Periscope-final-logo-05-1024x340.png" width="100%" />
      </a>
    </Link>
  );
};

export default Logo;
