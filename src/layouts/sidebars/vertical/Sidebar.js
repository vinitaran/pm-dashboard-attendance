import { Button, Nav, NavItem } from "reactstrap";
import Logo from "../../logo/Logo";
import Link from "next/link";
import { useRouter } from "next/router";
// import authentication from "../../../services/checkauthenticated";

const navigation = [
  {
    title: "Dashboard",
    href: "/",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Upload attendance",
    href: "/ui/forms",
    icon: "bi bi-textarea-resize",
  },
  {
    title: "Attendance record",
    href: "/ui/tables",
    icon: "bi bi-layout-split",
  },
  // {
  //   title: "Alert",
  //   href: "/ui/alerts",
  //   icon: "bi bi-bell",
  // },
  // {
  //   title: "Badges",
  //   href: "/ui/badges",
  //   icon: "bi bi-patch-check",
  // },
  // {
  //   title: "Buttons",
  //   href: "/ui/buttons",
  //   icon: "bi bi-hdd-stack",
  // },
  // {
  //   title: "Cards",
  //   href: "/ui/cards",
  //   icon: "bi bi-card-text",
  // },
  // {
  //   title: "Grid",
  //   href: "/ui/grid",
  //   icon: "bi bi-columns",
  // },
  
  // {
  //   title: "Breadcrumbs",
  //   href: "/ui/breadcrumbs",
  //   icon: "bi bi-link",
  // },
  // {
  //   title: "About",
  //   href: "/about",
  //   icon: "bi bi-people",
  // },
];

const Sidebar = ({ showMobilemenu }) => {
  let curl = useRouter();
  const location = curl.pathname;

  // authentication();

  return (
    <div className="p-3">
      <div className="d-flex align-items-center justify-content-center" onClick={showMobilemenu}>
        <Logo />
        {/* <Button
          close
          size="sm"
          className="ms-auto d-lg-none text-light"
          onClick={showMobilemenu}
        ></Button> */}
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg" onClick={showMobilemenu}>
              <Link href={navi.href}>
                <a
                  className={
                    location === navi.href
                      ? "text-primary nav-link py-3"
                      : "nav-link text-light py-3"
                  }
                >
                  <i className={navi.icon}></i>
                  <span className="ms-3 d-inline-block">{navi.title}</span>
                </a>
              </Link>
            </NavItem>
          ))}
          <Button
            color="danger"
            tag="a"
            target="_blank"
            className="mt-3"
            href="https://www.wrappixel.com/templates/ample-react-dashboard/?ref=33"
          >
            Logout
          </Button>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
