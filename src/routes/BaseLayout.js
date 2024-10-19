import ErrorBoundary from "../ui/ErrorBoundary";
import SideBar from "../views/sidebar/Sidebar";
import NavbarComponent from "../views/navbar/NavBar";
const BaseLayout = (props) => {
  const { children } = props;
  // In here we are showing the common thing in the page like header sidebar and the footer
  return (
    <ErrorBoundary>
      <div className="wrapper">
        <div className="d-flex position-relative">
          <SideBar />
          <main className="main-container">
            <NavbarComponent />
            {children}
          </main>
        </div>
      </div>
    </ErrorBoundary>
  );
};

BaseLayout.defaultProps = {
  children: [],
  user: {},
};

export default BaseLayout;
