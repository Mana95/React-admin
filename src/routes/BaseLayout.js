import { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme/theme";
import ErrorBoundary from "../ui/ErrorBoundary";
import Sidebar from "../views/sidebar/Sidebar";
import TopBar from "../views/navbar/NavBar";
const BaseLayout = (props) => {
  const { children } = props;
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  // In here we are showing the common thing in the page like header sidebar and the footer
  return (
    <ErrorBoundary>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="wrapper">
            <div className="d-flex position-relative">
              <Sidebar isSidebar={isSidebar} />
              <main className="main-container">
                <TopBar setIsSidebar={setIsSidebar} />
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </ErrorBoundary>
  );
};

BaseLayout.defaultProps = {
  children: [],
  user: {},
};

export default BaseLayout;
