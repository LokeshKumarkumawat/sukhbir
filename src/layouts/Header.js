import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { linkClick, toggleMenu } from "../utils";

const Header = () => {
  const [selectedTab, setSelectedTab] = useState("Home");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const [day, setDay] = useState(true);
  useEffect(() => {
    if (day) {
      document.querySelector("body").classList.add("dark-skin");
    } else {
      document.querySelector("body").classList.add("dark-skin");
    }
  }, [day]);

  const [pageToggle, setPageToggle] = useState(false);

  return (
    <Fragment>
      {/* Header */}
      <header className="header ">
        <div className="container removepadding">
          <div className="header__builder">
            <div className="row">
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
                {/* logo */}
                <div className="logo">
                  <Link href="/" legacyBehavior>
                    <a>
                      <img
                        width={228}
                        height={38}
                        src="assets/images/logo2.png"
                        alt=""
                      />
                    </a>
                  </Link>
                </div>
              </div>

              <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 align-right nav-hidee cc ">
                <nav className="nav-hidee"> 
                  <ul>
                  <li>
                        <Link href="/">
                                           
                HOME

                      </Link>
                    </li>
                    {/* <li>
                      <a href="#projects">PROJECTS</a>
                    </li>
                    <li>
                      <a href="#services">SERVICES</a>
                    </li>
                    <li>
                      <a href="#my-carrier">MY CARRIER</a>
                    </li> */}


                    <li>
                        <Link href="/works">
                                           
                  MY WORK

                      </Link>
                    </li>
                  </ul>

                </nav>



                <div className="contact-me-btn nav-hidee">
                  {/* <Link legacyBehavior href="/works"> */}
                    <a
                      className="btn button-redesign  scroll-animate nav-hidee"
                      href="https://drive.google.com/file/d/1bfW6a7RcJnuIupkMEDwWCbgVJGVgJfQq/view?usp=drive_link"
                    >
                      <span className="ls">RESUME</span>
                    </a>
                  {/* </Link> */}
                </div>




              </div>

              <div className="col-xs-0 col-sm-0 col-md-0 col-lg-0 align-right menu-hide">
                {/* switcher btn */}
                <a
                  href="#"
                  className={`switcher-btn ${day ? "" : "active"}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setDay(!day);
                  }}
                ></a>
                {/* menu btn */}
                <a href="#" className="menu-btn" onClick={(e) => toggleMenu(e)}>
                  <span />
                  <span />
                </a>
                {/* Menu Full Overlay */}
                <div className="menu-full-overlay">
                  <div className="menu-full-container">
                    <div className="container">
                      <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          {/* menu full */}
                          <div className="menu-full">
                            <ul className="menu-full">
                              <li className="menu-item">
                                <Link legacyBehavior href="/">
                                  <a
                                    className="splitting-text-anim-2"
                                    data-splitting="chars"
                                  >
                                    Home
                                  </a>
                                </Link>
                              </li>

                              <li className="menu-item">
                                <Link legacyBehavior href="/works">
                                  <a
                                    className="splitting-text-anim-2"
                                    data-splitting="chars"
                                  >
                                    WORKS
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </div>
                          {/* social */}
                          <div className="menu-social-links">
                            <a
                              target="_blank"
                              rel="nofollow"
                              href="mailto:sukhbirchung@gmail.com"
                            >
                              <i
                                aria-hidden="true"
                                className="fa fa-envelope"
                              />
                            </a>
                            <a
                              target="_blank"
                              rel="nofollow"
                              href="https://www.linkedin.com/in/sukhbirkaurc/"
                            >
                              <i
                                aria-hidden="true"
                                className="fab fa-linkedin"
                              />
                            </a>
                            <a target="_blank" rel="nofollow" href="#">
                              <i aria-hidden="true" className="fab fa-github" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="menu-overlay" />
                </div>
              </div>


            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};
export default Header;
