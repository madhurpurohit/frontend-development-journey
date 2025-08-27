import { Outlet, useLocation } from "react-router";
import { Suspense, useEffect } from "react";

function RootLayout() {
  // useLocation hook se current location (URL) ki details milti hain
  const { pathname } = useLocation();

  // Yeh tab chalega jab 'pathname' (URL path) change hoga.
  useEffect(() => {
    // Har baar jab route change ho, page ko top par (0, 0 coordinates) scroll kar dega.
    window.scrollTo(0, 0);
  }, [pathname]); // Dependency array me pathname daalne se ye sirf path change hone par hi run hoga.

  return (
    <div className="relative min-h-screen">
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default RootLayout;
