import { NavLink } from "react-router";

export const Header = () => {
  const getNavLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "green" : "black",
    };
  };

  return (
    <>
      <header className="section-navbar">
        <section className="top_txt">
          <div className="head container">
            <div className="head_txt">
              <p>Free shipping, 30-day return or refund guarantee.</p>
            </div>
            <div className="sing_in_up">
              <NavLink to="# ">SIGN IN</NavLink>
              <NavLink to="# ">SIGN UP</NavLink>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/">
              <img
                src="/react-router.svg"
                alt="DevFLux eCommerce logo"
                className="logo"
                width="50px"
                height="auto"
              />
            </NavLink>
          </div>

          {/* Active link using three methods */}
          <nav className="navbar">
            <ul>
              <li className="nav-item">
                {/* Method1:- Using className property. */}
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                {/* Method2:- Using style property. */}
                <NavLink
                  to="/about"
                  className="nav-link"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "red" : "black",
                    };
                  }}
                >
                  about
                </NavLink>
              </li>
              <li className="nav-item">
                {/* Method2:- Using function inside style property. */}
                <NavLink
                  to="/movie"
                  className="nav-link"
                  style={getNavLinkStyle}
                >
                  movie
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
