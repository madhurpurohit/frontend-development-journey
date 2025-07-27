import { NavLink, useNavigate, useRouteError } from "react-router";

export const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  const navigate = useNavigate();
  // console.log(navigate);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoToHomePage = () => {
    navigate("/");
  };

  if (error.status === 404) {
    return (
      <>
        <section className="error-section flex-col gap-7">
          <div id="error-text">
            <figure>
              <img src="/Error-Page.svg" alt="404 page" />
            </figure>

            <div className="text-center">
              <p className="p-a">
                . The page you were looking for could not be found
              </p>
              <p className="p-b">... Back to previous page</p>
            </div>
          </div>

          {/* If we want to go back to home page than we use the below code. */}
          {/* <NavLink to="/" className="btn">
            Go to Home Page
          </NavLink> */}

          {/* If we want to go back on previous page than. */}
          <button className="btn" onClick={handleGoBack}>
            Go Back
          </button>
          <button className="btn" onClick={handleGoToHomePage}>
            Go to Home Page
          </button>
        </section>
      </>
    );
  }

  return <h1>You are hitting the wrong URL</h1>;
};
