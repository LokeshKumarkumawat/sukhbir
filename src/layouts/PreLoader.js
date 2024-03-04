import { Fragment } from "react";
const PreLoader = () => {
  return (
    <Fragment>
      {/* Preloader */}
      <div className="preloader bb">
        <div className="centrize full-width">
          <div className="vertical-center">
            <div className="spinner-logo">
              <img
                src="assets/images/logo2.png"
                alt="Personal Portfolio HTML Template"
              />
              <div className="spinner-dot" />
              <div className="spinner spinner-line" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default PreLoader;
