import { App as AntdApp } from "antd";
import { Helmet } from "react-helmet-async";

import Logo from "@/assets/images/logo.png";
import Router from "@/router/index";
import AntdConfig from "@/theme/antd";

import { MotionLazy } from "./components/animate/motion-lazy";
import Toast from "./components/toast";

function App() {
	return (
    <AntdConfig>
      <AntdApp>
        <MotionLazy>
          <Helmet>
            <title>CPE LAB Dashboard</title>
            <link rel="icon" type="image/png" href={Logo} />
          </Helmet>
          <Toast />
          <Router />
        </MotionLazy>
      </AntdApp>
    </AntdConfig>
  );
}

export default App;
