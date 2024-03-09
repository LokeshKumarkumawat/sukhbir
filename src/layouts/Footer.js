const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__builder">
        <div className="container">
          <div className="row">



            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="social-links scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                    <a
                      target="_blank"
                      rel="nofollow"
                      href="mailto:sukhbirchung@gmail.com"
                    >
                      <i aria-hidden="true" className="fa fa-envelope" />
                    </a>
                <a
                      target="_blank"
                      rel="nofollow"
                      href="https://www.linkedin.com/in/sukhbirkaurc/"
                    >
                      <i aria-hidden="true" className="fab fa-linkedin" />
                </a>
                <a target="_blank" rel="nofollow" href="#">
                      <i aria-hidden="true" className="fab fa-github" />
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="copyright-text align-center scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                © 2024 <strong>Sukhbir Chung</strong> All rights reserved
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="copyright-text align-right scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                Developed by <strong>LOKESH</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
