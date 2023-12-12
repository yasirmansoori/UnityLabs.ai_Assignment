import "./topNav.css";
function TopNav({ onChange, checked }) {
  return (
    <div className="TopNav" id="topNav">
      <div className="container">
        <header className="border-bottom lh-1 py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1">
              <a href="/">Subscribe</a>
            </div>
            <div className="col-4 text-center">
              <a
                className="blog-header-logo fs-3 text-decoration-none"
                href="/"
              >
                HackerX
              </a>
            </div>
            <div className="col-4 d-flex justify-content-end gap-4 align-items-center">
              <label className="ui-switch">
                <input type="checkbox" checked={checked} onChange={onChange} />
                <div className="slider">
                  <div className="circle"></div>
                </div>
              </label>

              <a className="btn btn-sm btn-outline-secondary" href="/">
                Sign up
              </a>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default TopNav;
