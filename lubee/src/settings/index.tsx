import { Outlet } from "react-router-dom";
import useSetScreenSize from "./hooks/useSetScreenSize";
import useSetInterceptors from "./hooks/useSetInterceptors";

const Settings = () => {
  useSetInterceptors();
  useSetScreenSize();

  return <Outlet />;
};

export default Settings;
