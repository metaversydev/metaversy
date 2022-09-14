import React from "react";
import ReactDOM from "react-dom";
import { WrappedIntlProvider } from "./react-components/wrapped-intl-provider";
import registerTelemetry from "./telemetry";
import Store from "./storage/store";
import "./utils/theme";
import { AuthContextProvider } from "./react-components/auth/AuthContext";
import { SignInModalContainer } from "./react-components/auth/SignInModalContainer";
import { PageContainer } from "./react-components/layout/PageContainer";
import "./react-components/styles/global.scss";
import "./assets/stylesheets/globals.scss";
import { Center } from "./react-components/layout/Center";
import { ThemeProvider } from "./react-components/styles/theme";
import Header from "./react-components/home/custom-home/header/Header";
import { Footer } from "./react-components/home/custom-home/footer/Footer";
import MetaversyPageLayout from "./react-components/layout/custom-layout/MetaversyPageLayout";

registerTelemetry("/signin", "Hubs Sign In Page");

const store = new Store();
window.APP = { store };

function Root() {
  return (
    <WrappedIntlProvider>
      <ThemeProvider store={store}>
        <AuthContextProvider store={store}>
          <MetaversyPageLayout>
            <Header />
            <Center>
              <SignInModalContainer />
            </Center>
            <Footer />
          </MetaversyPageLayout>
        </AuthContextProvider>
      </ThemeProvider>
    </WrappedIntlProvider>
  );
}

ReactDOM.render(<Root />, document.getElementById("ui-root"));
